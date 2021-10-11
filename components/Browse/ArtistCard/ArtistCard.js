import React, { Component } from 'react'
import styled from 'styled-components';
import * as Styles from './styles'
import Link from 'next/link'
import Image from 'next/image'

const StyledImage = styled(Image)`
    max-width: 75%;
    border-radius: 3px;
    border: 1.5px solid #939393;
`

export default function ArtistCard(props) {
    return (
        <Styles.cardContainer>
            <Link href="/">
                <a>
                    <img
                        src={props.imgPath}
                        alt={props.name}
                        width="100%"
                        height="100%"
                    />
                </a>
            </Link>
            <Styles.name>
                 {props.name}
            </Styles.name>
        </Styles.cardContainer>
    )
}