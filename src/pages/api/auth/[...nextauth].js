import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_TEST_ID,
            clientSecret: process.env.FACEBOOK_TEST_SECRET
        }),
        // ...add more providers here
    ],
    secret: process.env.SECRET,
    callbacks: {
        redirect({ url, baseUrl }) {
            if (url.startsWith(baseUrl)) return url
            // Allows relative callback URLs
            else if (url.startsWith("/")) return new URL(url, baseUrl).toString()
            return baseUrl
        }
    }

})
