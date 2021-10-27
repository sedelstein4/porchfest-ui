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


// cardrow
export const rowContainer = styled.div`
  margin-bottom: 100px;
`

export const row = styled.div`
  width:100%;
  display: grid;
  grid-row: auto;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
`

export const genre = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 10px;
`



// aritstcard
export const cardContainer = styled.div`
  width: 100px;
  height: 100px;

  img {
    border-radius: 3px;
    border: 1.5px solid #939393;
    object-fit: cover;
  }

`
export const img = styled.div`
  //margin:5px;
    
`
export const name = styled.p`
  text-align: left;
  font-size: 1rem;
  margin-top: 10px;
`