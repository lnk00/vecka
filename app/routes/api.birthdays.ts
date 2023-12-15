import { type ActionFunctionArgs, json } from '@remix-run/node';

export async function loader({ request }: ActionFunctionArgs) {
  return json({
    message: 'Well received.',
  });
}
