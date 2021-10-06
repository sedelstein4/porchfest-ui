import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: var(--main);
`

export const PageBtn = styled.a`
  flex: 1;
  padding: 10px 0;
  color: var(--white);
  font-size: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

export const backToHome = styled.div` 
    margin: 3rem 0 0;
`

export const cardContainer = styled.div`
  //align-items: center;

  img {
    max-width: 75%;
    border-radius: 3px;
    border: 1.5px solid #939393;
  }

`
export const img = styled.div`
  //margin:5px;
    
`
export const name = styled.div`
  text-align: left;
  font-size:1.1em;
  max-width:90%;
`
export const rowContainer = styled.div`
  margin-left:5px;
`

export const row = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-content: space-evenly;
  margin-left:15px;
`

export const genre = styled.div`
  margin-top:15px;
  margin-left:15px;
  text-align: left;
  font-size: x-large;
  font-weight: bold;
`