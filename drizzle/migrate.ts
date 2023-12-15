import { migrate } from 'drizzle-orm/libsql/migrator';
import * as dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
dotenv.config();

export const libSQLClient = createClient({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_TOKEN!,
});

export const DatabaseClient = drizzle(libSQLClient);

async function main() {
  try {
    await migrate(DatabaseClient, {
      migrationsFolder: 'drizzle/migrations',
    });
    console.log('Tables migrated!');
    process.exit(0);
  } catch (error) {
    console.error('Error performing migration: ', error);
    process.exit(1);
  }
}

main();
