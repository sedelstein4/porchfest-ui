import React, { Component } from 'react'
import * as Styles from './styles'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation({ children, home }) {
    return (
        <Styles.NavContainer>
            <Styles.PageBtn>
                Browse
            </Styles.PageBtn>
            <Styles.PageBtn>
                Search
            </Styles.PageBtn>
            <Styles.PageBtn>
                Saved
            </Styles.PageBtn>
            <Styles.PageBtn>
                Events
            </Styles.PageBtn>
        </Styles.NavContainer>
    )
        }