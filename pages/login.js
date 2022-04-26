import Head from "next/head";
import React from "react";
import {SignIn} from "../components/Onboarding/Login/SignIn"

export default function Login() {
    return (
        <div>
            <Head>
                <title>Sign in</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SignIn/>
        </div>
    )
}