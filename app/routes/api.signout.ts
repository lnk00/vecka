import { type ActionFunctionArgs, redirect } from '@remix-run/node';
import { checkNotAuthenthicatedAndRedirect } from '~/utils/authentication.server';
import { auth } from '~/utils/lucia.server';

export async function action({ request }: ActionFunctionArgs) {
  const session = await checkNotAuthenthicatedAndRedirect(request, '/signin');
  await auth.invalidateSession(session.sessionId);
  const sessionCookie = auth.createSessionCookie(null);

  return redirect('/signin', {
    headers: {
      'Set-Cookie': sessionCookie.serialize(),
    },
  });
}
