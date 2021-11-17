import styled from "styled-components";

export const infoContainer = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 62px;
`
export const fullWidthImgDiv = styled.div`
    height:250px;
    img{
    object-fit: fill;
    }
`
export const eventDiv = styled.div`
  margin-left: var(--margin);
  margin-right: var(--margin);

`
export const dateRow = styled.p`
    font-size: 1.75em;
    margin-bottom: 0;
`
export const timeRow = styled.p`
    font-size: large;
    margin-top: 0.75em;
    margin-bottom: 25px;
`
export const desc = styled.p`
    font-weight: lighter;
`

export const header = styled.div`
  flex: 1;
  padding: 10px 0 0 15px;
  color: var(--white);
  font-size: 1.8em;
  line-height: 1em;
  display:inline-flex;
  justify-content: left;
  font-weight: bold;
  white-space: nowrap;
`

export const TopContainer = styled.div`
  display: flex;
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: var(--main);
  margin: auto;
  `

export const profileBtn = styled.div`
  display: inline-flex;
  align-items: center;
  color:white;
  margin-right: 30px;
  margin-top: 15px;
  flex: 1;
  justify-content: flex-end;
  width: 25px;
  height: 25px;

  svg{
    width: 30px;
    height: 30px;
  }
`

export const city = styled(header)`
  font-size: 1em;
  display:block;
  padding-top:5px;
`
