import React, {Component, useState} from 'react'
import * as Styles from './styles'

const whichSelected = null;
const current = "Genre";

function selectClick() {

}
//TODO - sort picker functionality
// click events for each sort type (add top/bottom border and change txt color), change whichSelected var
// selectClick changes currentSort var, hides this menu, and sets whichSelected (browse.js will get
// current is what this menu defaults to when opened - black text, no top/bottom borders
// show/hide transition/animation
// Eventually - the fancy scroll & text fading when selecting

//what does sorting by genre do anyway? shouldn't everything be A-Z by default?

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