import styled from 'styled-components'
import {icon} from "../Search/styles";

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



// artistcard
export const cardContainer = styled.div`
  width: 100px;
  height: 100px;

  img {
    border-radius: 3px;
    border: 1px solid #939393;
    object-fit: cover;
    object-position: top center;
  }

`
export const img = styled.div`
  //margin:5px;
    
`
export const name = styled.p`
  text-align: left;
  font-size: 1rem;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`

//artist list
export const resultContainer = styled.div`
    display:flex;
    align-items: center;
    border-bottom: 1px solid var(--grey-mid);
    padding-top:2px;
  
    img{
      width:48px;
      height:48px;
      object-fit: cover;
      object-position: top center;
      border-radius: 50%;
      border: 1px solid var(--grey-dark);
      margin: 18px 24px 16px 12px;
    }
  `

export const resultName = styled.div`
  justify-content: center;
  font-size: 18pt;
  margin-bottom:5px;
  `

export const resultType = styled.div`
  font-size: 11pt;
  color: var(--grey-dark);
  `

export const resultIcon = styled(icon)`
    margin-left: auto;
    margin-right: var(--mobile-margin);
    svg{
      width:18px;
    }
    
`
