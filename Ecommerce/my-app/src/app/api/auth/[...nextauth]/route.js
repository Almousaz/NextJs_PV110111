import {env} from '@/env/env.mjs';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOption = {
  providers: [
    GoogleProvider({
      clientId: env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
  ],

  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({session, token}) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOption);
export {handler as GET, handler as POST};
