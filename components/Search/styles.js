import styled from 'styled-components'

export const barContainer = styled.div`
    display: block;
    width: 100%;
    margin-top: -12px;
    padding:1px;
    background: rgba(212, 175, 205, 0.25); //var(--secondary) at 25% opacity
`

export const searchBar = styled.div`
    display:block;
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
      width:95%;
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
      width:22px;
    }
    `

export const resultContainer = styled.div`
    display:flex;
    align-items: center;
    border-bottom: 1px solid var(--grey-mid);
    padding-top:2px;
  
    img{
        width:48px;
        height:48px;
        object-fit: contain;
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
