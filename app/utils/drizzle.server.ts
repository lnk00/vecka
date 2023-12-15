import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

export const libSQLClient = createClient({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_TOKEN!,
});

export const DatabaseClient = drizzle(libSQLClient);
