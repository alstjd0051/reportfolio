import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.NEXT_GOOGLE_OAUTH_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      console.log(session);
      const user = session.user;
      if (user) {
        session.user = {
          ...user,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/login/error",
  },
});

export { handler as GET, handler as POST };
