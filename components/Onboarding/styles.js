import styled from "styled-components";

export const container = styled.div`
  height:80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
      form{
        width:90%;
      }
    
      input[type=submit], input[type=text]{
        border: 2px solid var(--grey-middark);
        border-radius:4px;
        text-align: left;
        padding:15px 0 15px 12px;
        margin-bottom:20px;
        margin-left:18px;
        width:95%;
        font-size: smaller;
        font-weight: bold;
      }

      input[type=submit]{
        background: var(--main);
        border-color: var(--black);
        text-align: center;
        color: white;
        width:100%;
        padding-left:0;
      }
    
      input:focus{
        border:none;
        outline:none;
      }


`

export const title = styled.div`
  color: var(--main);
  font-weight: bold;
  font-size: 3.3em;
  text-align: center;
  margin-bottom:25px;
`

export const backBtn = styled.div`
  color: var(--secondary);

  svg{
    width:40px;
    margin:20px 0 0 20px;+
    
  }
`

