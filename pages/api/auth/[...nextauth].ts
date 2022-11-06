import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID_TEST as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_TEST as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
