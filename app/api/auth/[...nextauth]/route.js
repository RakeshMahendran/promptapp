import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log("Hi");
console.log({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
  // async session({ session }) {},
  // async signIn({ profile }) {},
});

console.log("NextAuth handler:", handler);

export default handler;
