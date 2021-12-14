import React from 'react'
import * as Styles from './styles'
import Link from 'next/link'

export default function Home(props) {
    return (
        <Styles.homeContainer>
            <Styles.title>Porchfest</Styles.title>
            <Link href={"/login"} passHref>
                <Styles.btn>SIGN IN</Styles.btn>
            </Link>
            <br/>
            <Link href={"/register"} passHref>
                <Styles.btn>SIGN UP</Styles.btn>
            </Link>
            <br/>
            <Link href={"/info"} passHref>
                <Styles.btn>CONTINUE AS GUEST</Styles.btn>
            </Link>
        </Styles.homeContainer>
    )
}