import React, { Component } from 'react'
import * as Styles from './styles'

export default function CardRow(props) {
    return (
        <Styles.rowContainer>
            <Styles.genre>
                {props.genre}
            </Styles.genre>
            <Styles.row>
                {props.children}
            </Styles.row>
        </Styles.rowContainer>
    )
}