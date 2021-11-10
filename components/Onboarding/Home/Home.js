import React from 'react'
import * as Styles from './styles'

export default function Home(props) {
    return (
        <Styles.homeContainer>
            <Styles.title>Porchfest</Styles.title>
            <Styles.btn>SIGN IN</Styles.btn>
            <br/>
            <Styles.btn>SIGN UP</Styles.btn>
            <br/>
            <Styles.btn>CONTINUE AS GUEST</Styles.btn>
        </Styles.homeContainer>
    )
}