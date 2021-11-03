import React, {Component, useState} from 'react'
import * as Styles from './styles'

const whichSelected = null;
const current = "Genre";

function selectClick() {

}


export default function sort(){
    return(
        <Styles.container>
            <Styles.btnContainer>
                <Styles.selectBtn onClick={selectClick}>Select</Styles.selectBtn>
            </Styles.btnContainer>
            <Styles.header>Sort by:</Styles.header>
            <Styles.sortRow>Recommended</Styles.sortRow>
            <Styles.sortRow>Genre</Styles.sortRow>
            <Styles.sortRow>A-Z</Styles.sortRow>
            <Styles.sortRow>Z-A</Styles.sortRow>
        </Styles.container>
    )
}