import { type ActionFunctionArgs, json } from '@remix-run/node';
import { Form } from '@remix-run/react';
import {
  createSessionAndRedirect,
  checkAlreadyAuthenticatedAndRedirect,
} from '~/utils/authentication.server';
import { auth } from '~/utils/lucia.server';

type SignupFormErrors = {
  email?: string;
  password?: string;
  auth?: string;
};

function validate(email?: string, password?: string): SignupFormErrors {
  const errors: SignupFormErrors = {};

  if (email === '') errors.email = 'Email is mandatory';
  if (password === '') errors.password = 'Password is mandatory';

  if (email && !email.includes('@')) errors.email = 'Email must include @';

  if (password && password.length < 10)
    errors.password = 'Password must be at least 10 characters';

  return errors;
}

export async function loader({ request }: ActionFunctionArgs) {
  await checkAlreadyAuthenticatedAndRedirect(request, '/');
  return json({});
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get('email')?.toString() || '';
  const password = formData.get('password')?.toString() || '';
  const errors: SignupFormErrors = validate(email, password);

  try {
    const user = await auth.createUser({
      key: {
        providerId: 'email',
        providerUserId: email.toLowerCase(),
        password,
      },
      attributes: {
        email,
      },
    });

    return await createSessionAndRedirect(user.userId, '/');
  } catch (e) {
    errors.auth = 'Authentication failed';
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }
}

export default function Signup() {
  return (
    <>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create your account
            </h2>
          </div>
          <Form noValidate className="space-y-10" method="POST">
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </Form>

          <p className="text-center text-sm leading-6 text-gray-500">
            You already have an account?{' '}
            <a
              href="/signin"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Connect to your account
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
