import React, { Component } from 'react'
import * as Styles from './styles'

export default function Header(props) {
    return (
        <Styles.TopContainer>
            <Styles.header>
               {props.title}
            </Styles.header>
            <Styles.IconBtn>
                Options
            </Styles.IconBtn>
        </Styles.TopContainer>
    )
}