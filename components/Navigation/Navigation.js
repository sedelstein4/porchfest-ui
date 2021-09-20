import React, { Component } from 'react'
import * as Styles from './styles'
import Link from 'next/link'

export default function Navigation({ children, home }) {
    return (
        <Styles.NavContainer>
            <Link href={"/browse"} passHref>
                <Styles.NavLink>Browse</Styles.NavLink>
            </Link>
            <Styles.NavLink>
                Search
            </Styles.NavLink>
            <Styles.NavLink>
                Saved
            </Styles.NavLink>
            <Styles.NavLink>
                Events
            </Styles.NavLink>
        </Styles.NavContainer>
    )
        }