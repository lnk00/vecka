import { lucia } from 'lucia';
import { libSQLClient } from './drizzle.server';
import { web } from 'lucia/middleware';
import { libsql } from '@lucia-auth/adapter-sqlite';

export const auth = lucia({
  env: 'DEV',
  adapter: libsql(libSQLClient, {
    user: 'user',
    key: 'user_key',
    session: 'user_session',
  }),
  middleware: web(),
  sessionCookie: {
    expires: false,
  },
  getUserAttributes: (databaseUser) => {
    return {
      email: databaseUser.email,
    };
  },
});

export type Auth = typeof auth;
