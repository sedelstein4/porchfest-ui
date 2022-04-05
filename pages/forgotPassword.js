import Head from "next/head";
import React from "react";
import {ForgotPasswordPage} from "../components/Onboarding/Login/forgotPassword"

export default function ForgotPassword() {
    return (
        <div>
            <Head>
                <title>Forgot Password</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ForgotPasswordPage/>
        </div>
    )
}