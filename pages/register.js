import Head from "next/head";
import React from "react";
import SignUp from "../components/Onboarding/Login/SignUp"
import Header from "../components/Navigation/Header";

export default function Register() {
    return (
        <div>
            <Head>
                <title>Sign Up</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SignUp/>
        </div>
    )


}
