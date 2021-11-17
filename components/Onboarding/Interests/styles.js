import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  padding: 20px 0;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: var(--main);
  margin: auto;
  text-align: center;
  color: var(--white);
  font-weight: bold;
  font-size: 1.7em;
`

export const Checklist = styled.div`
  padding-top:5px;
  text-align: left;
`

//based on https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
export const checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 33px;
  width: 33px;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 55%, rgba(187,187,187,0.55) 100%);
  border: 1px solid var(--grey-mid);
  border-radius: 3px;
  
  :after{ //create checkmark
    content: "";
    position: absolute;
    display: none;
  }
  `

export const selection = styled.label`
  display: block;
  position: relative;
  font-size:1.75em;
  font-weight: bold;
  margin-bottom: 24px;
  padding-left:55px;
  padding-top:3px;
  
  input{ //hide default checkbox
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  
  input:checked ~ ${checkmark}{
    :after{
      display: block;
    }
  }
  
  ${checkmark}{ //checkmark indicator styling
    :after {
      left: 10px;
      top: 2px;
      width: 9px;
      height: 17px;
      border: solid var(--black);
      border-width: 0 5px 5px 0;
      transform: rotate(42deg);
    }
  }
`

export const buttonBar = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: var(--main);
  
  button, input[type="submit"]{
    padding: 15px 0px;
    width:40%;
    border: 2px solid var(--grey-middark);
    border-radius: 4px;
    margin: 12px 0;
    font-weight: bold;
    font-size: smaller;
  }
  button{
    margin-right: 20px;
  }
`
