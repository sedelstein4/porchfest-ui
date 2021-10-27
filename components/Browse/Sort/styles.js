import styled from "styled-components";

export const container = styled.div`
    display: inline-block;
    z-index:101;
    position:absolute;
    bottom: 0;
    left:0;
    right:0;
    width:100%;
    padding-bottom:15px;
    color: var(--grey-mid);
  
    border-top: 1px solid var(--grey-middark);
    background: white;
    font-size: large;
    
    `

export const btnContainer = styled.div`
    //need this to align the button to the right
    display:flex;
    justify-content: flex-end;
    width: 100%;
    padding: 0;
`

export const selectBtn = styled.button`
    padding: 16px 20px 0;
  
    color: var(--link);

    //override default button styling
    border: none;
    outline: none;
    background: none;
    font-size: large;
    
`

export const sortRow = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 6px;
  
    border: none;
    
    `

export const header = styled.p`
    text-align: center;
    margin: 5px 0 9px;
    `