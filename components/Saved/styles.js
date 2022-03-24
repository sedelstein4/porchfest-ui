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
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 11px 0;
  border-bottom: 1px solid var(--grey-mid);
`

export const LikeBtn = styled.div`
  display: inline-flex;
  align-items: center;
  color: white;
  margin-right: 20px;
  
  .filled-heart{
    color: #F85858;
  }

  svg{
    width: 35px !important;
    height: 35px !important;
  }
`

export const resultName = styled.div`
  justify-content: center;
  font-size: 18pt;
  margin-bottom:5px;
  `

export const resultIcon = styled(icon)`
  margin-left: auto;
  margin-bottom: 7px;
    svg{
      width:18px;
    }
    
`
