import React from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'


export default function GenreChecklist(data) {
    return (
        <div className="content">
            <Styles.Header>Select Your Music Interests</Styles.Header>
            <Styles.Checklist>
                <form>
                    <Styles.selection htmlFor={"Alternative"}>Alternative
                        <input type={"checkbox"} id={"Alternative"}/>
                        <Styles.checkmark/>
                    </Styles.selection>
                    <Styles.selection htmlFor={"Blue"}>Blues
                        <input type={"checkbox"} id={"Blues"}/>
                        <Styles.checkmark/>
                    </Styles.selection>
                    {/*<Styles.buttonBar>*/}
                    {/*    <Styles.Button>SKIP</Styles.Button>*/}
                    {/*    <input*/}
                    {/*        type={"submit"}*/}
                    {/*        id={"submit"}*/}
                    {/*        name={"continue"}*/}
                    {/*        value={"CONTINUE"}*/}
                    {/*    />*/}
                    {/*</Styles.buttonBar>*/}

                </form>

            </Styles.Checklist>
        </div>
    )
}

export async function getStaticProps( context ) {
    const genreRes = await fetch(`http://localhost:5000/genres`)

    const genreData = await genreRes.json()

    return {
        props: {
            genreData
        }
    }
}