import styled from "styled-components";

export const homeContainer = styled.div`
  text-align:center;
`

export const title = styled.div`
  color: var(--main);
  font-weight: bold;
  font-size: 3.3em;
  margin-top: 80px;
  margin-bottom: 10px;
`

export const btn = styled.button`
  display:flex;
  color: var(--main);
  //background: var(--secondary);
  background: none;
  border: 2px solid var(--grey-middark);
  border-radius: 5px;
  padding: 15px 30px;
  width:45%;
  max-width: 550px;
  white-space: nowrap;
  justify-content: center;
  margin: auto;
  font-weight: bold;
  font-size: smaller;
`

export const btnGuest = styled(btn)`
  background: #efefef;
`
//for buttons that are close to the bottom of the screen and would otherwise be hidden by the nav
export const btnBottom = styled(btn)`
    margin-bottom: 75px;
`

export const slideshowContainer = styled.div`
    margin: 0 auto;
    max-width: 550px;
    //height: 400px;
    `