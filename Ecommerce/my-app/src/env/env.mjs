import {z} from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_GOOGLE_CLIENT_ID: z.string(),
  NEXT_GOOGLE_CLIENT_SECRET: z.string(),
  NEXT_NEXTAUTH_URL: z.string(),
});

export const env = envSchema.parse(process.env);
