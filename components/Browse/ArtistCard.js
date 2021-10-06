import React, { Component } from 'react'
import * as Styles from './styles'

export default function ArtistCard(props) {
    return (
        <Styles.cardContainer>
            <Styles.img>
              <img src={props.imgPath} alt={"Artist Logo"} />
            </Styles.img>
            <Styles.name>
                 <p>{props.name}</p>
            </Styles.name>
        </Styles.cardContainer>
    )
}