import {withIronSession} from "next-iron-session"

export default function withSession(handler){
    return withIronSession(handler,{
        password: "AMAPOLAAMAPOLAAMAPOLAAMAPOLAAMAPOLA",
        cookieName: "amapola_auth_session",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        }
    })
}