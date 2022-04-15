import styled from "styled-components";
import {icon} from "../Search/styles";


export const artistResults = styled.div`
  display:flex;
  padding-top:2px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
  
    img{
        width:48px;
        height:48px;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid var(--grey-dark);
        margin-right: 12px;
    }
  `

export const searchItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 11px 0;
  border-bottom: 1px solid var(--grey-mid);

  a{
    display: inline-flex;
    width: 100%;
  }
`

export const LikeBtn = styled.div`
  display: inline-flex;
  align-items: center;
  color: white;
  margin-right: 20px;
  
  .filled-heart{
    color: var(--heart-red);
  }

  svg{
    width: 35px !important;
    height: 35px !important;
  }
`

export const resultName = styled.div`
  align-self: center;
  font-size: 18pt;
  `

export const resultIcon = styled(icon)`
  align-self: center;
  margin-left: auto;
  svg{
    width:30px !important;
    height:30px !important;
  }
`

export const homeContainer = styled.div`
  text-align:center;
`

export const btn = styled.button`
  display:flex;
  color: var(--main);
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
