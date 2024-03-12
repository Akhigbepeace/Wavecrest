import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const defaultEmail = process.env.ADMIN_EMAIL as string;
const defaultPassword = process.env.ADMIN_PASSWORD as string;

export const authOptions: AuthOptions = {
  session: {
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  pages: {
    error: "/admin/login",
    signIn: "/admin/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === defaultEmail &&
          credentials.password === defaultPassword
        ) {
          return {
            id: "adminUser@gmail.com",
            emai: "adminUser@gmail.com",
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: any) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
