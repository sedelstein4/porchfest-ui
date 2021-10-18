import React from 'react'
import * as Styles from './styles'

export default function EventInfo(props) {
    return (
        <Styles.infoContainer>
            <Styles.imgDiv>
                <img
                    src={props.imgPath}
                    alt={props.name}
                    width="100%"
                    height="100%"
                />
            </Styles.imgDiv>
            <Styles.eventDiv>
                <Styles.dateRow>
                    {props.dateStr}
                </Styles.dateRow>
                <Styles.timeRow>
                    {props.timeStr}
                </Styles.timeRow>
                <Styles.desc>
                    {props.desc}
                </Styles.desc>
            </Styles.eventDiv>
        </Styles.infoContainer>
    )
}
