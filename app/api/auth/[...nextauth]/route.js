import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      redirectUri:
        process.env.NEXTAUTH_REDIRECT_URI ||
        "http://localhost:3000/api/auth/callback/github",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}