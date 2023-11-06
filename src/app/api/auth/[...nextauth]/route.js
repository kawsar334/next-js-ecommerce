import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: "355664907078-kt8mu12aej8q4m9lngmdqrbmjiphhaq6.apps.googleusercontent.com",
            clientSecret:"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",
        }),
    ],
})

export {handler as GET , handler as POST};