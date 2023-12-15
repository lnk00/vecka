import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { checkNotAuthenthicatedAndRedirect } from '~/utils/authentication.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await checkNotAuthenthicatedAndRedirect(request, '/signin');
  return json(session.user);
}

export default function Landing() {
  const user = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl">Welcome !</h1>
      <h2 className="text-2xl pt-6">You are connected with {user.email}</h2>
      <Form noValidate className="pt-6" method="POST" action="/api/signout">
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign out
          </button>
        </div>
      </Form>
    </div>
  );
}
