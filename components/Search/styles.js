import styled from 'styled-components'

export const searchContainer = styled.div`
    display:block;
    border: solid 1px var(--grey-middark);
    border-radius: 10px;
    padding: 5px 0 5px 8px;
    margin-bottom: 14px;
  
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