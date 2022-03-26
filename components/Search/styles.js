import styled from 'styled-components'

export const barContainer = styled.div`
    display: block;
    width: 100%;
    margin-top: -62px;
    padding:1px;
    background: none;
    //background: rgba(212, 175, 205, 0.25); //var(--secondary) at 25% opacity
  
`

export const searchBar = styled.div`
    display:flex;
    border: solid 1px var(--grey-middark);
    border-radius: 10px;
    padding: 5px 0 5px 8px;
    margin: 18px 18px;
    background: white;
  
    form{
      display: inline-block;
      width:90%;
      vertical-align: top;
    }
  
    input{
      border: none;
      text-align: left;
      padding:5px;
      padding-top:7px;
      display:flex;
      flex-grow: 1;
      font-size: larger;
    }
  
    input:focus{
      border:none;
      outline:none;
    }
`

export const icon = styled.div`
    display: inline-block;
    padding-top:3px;
  
    svg{
      display:block;
      width:25px !important;
      height:25px !important;
    }
`
export const searchIcon = styled(icon)`
  padding-right:8px;
  
`

export const resultContainer = styled.div`
  margin: 0 20px;
  `

export const artistResults = styled.div`
    display:flex;
    border-bottom: 1px solid var(--grey-mid);
    padding-top:2px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
  
    img{
        width:48px;
        height:48px;
        object-fit: contain;
        border-radius: 50%;
        border: 1px solid var(--grey-dark);
        margin: 5px 24px 16px 0;
    }
  `

export const genreResults = styled.div`
    display:flex;
    border-bottom: 1px solid var(--grey-mid);
    padding-top:2px;
  flex-direction: column;
  align-items: flex-start;
  
    img{
        width:48px;
        height:48px;
        object-fit: contain;
        border-radius: 50%;
        border: 1px solid var(--grey-dark);
      margin: 5px 24px 16px 0;
    }
  `

export const searchItem = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  
  a{
    width: 100%;
    display: inherit;
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
