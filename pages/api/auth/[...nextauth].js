import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
   secret: process.env.NEXTAUTH_SECRET,
   providers: [
      DiscordProvider({
         clientId: process.env.DISCORD_CLIENT_ID,
         clientSecret: process.env.DISCORD_CLIENT_SECRET,
         authorization: { params: { scope: "identify guilds" } },
      }),
   ],
   callbacks: {
      async jwt({ token, account }) {
         if (account) {
            token.accessToken = account.access_token;
         }
         return token;
      },
      async session({ session, token }) {
         session.accessToken = token.accessToken;

         if (session?.user) {
            session.user.id = token.sub;
         }

         return session;
      },
   },
});
