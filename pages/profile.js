import Head from "next/head";
import React from "react";
import ProfileComponent from "../components/Onboarding/Profile/profile"
import Navigation from "../components/Navigation/Navigation";

export default function profile(props) {
    return (
        <div>
            <Head>
                <title>User Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProfileComponent />
            <Navigation />
        </div>
    )
}