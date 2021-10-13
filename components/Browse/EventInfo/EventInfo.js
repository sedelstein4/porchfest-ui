import React, { Component } from 'react'
import * as Styles from './styles'

export default function EventInfo(props) {
    return (
        <Styles.container>
            <Styles.styledImg
                src={props.imgPath}
                alt={props.name}
            />
            <Styles.dateRow>
                {props.dateStr}
            </Styles.dateRow>
            <Styles.timeRow>
                {props.timeStr}
            </Styles.timeRow>
            <br/>
            <Styles.desc>
                {props.desc}
            </Styles.desc>
        </Styles.container>
    )
}
