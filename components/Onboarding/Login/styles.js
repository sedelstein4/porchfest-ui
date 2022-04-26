import styled from "styled-components";

export const container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
      form{
        width:90%;
        margin-left: 5%; //centers it (leaves 5% on the right from the 90% width)
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        align-items: stretch;
      }
  
      input:focus{
        border: 2px solid var(--grey-mid);
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
    width:40px !important;
    height:40px !important;
    margin:20px 0;
    
  }
`
export const infoType = styled.div`
  margin: 10px 0 12px 12px;
  color: #3e3e3e;
  font-size: 1.65em;
`
export const infoRow = styled.div`
  display:flex;
  align-items: center;
  padding-top:2px;
  justify-content: space-between;
`
export const infoValue = styled.div`
  margin: 10px 28px 12px 0;
  color: var(--grey-dark);
  font-size:1.25em;
  
  input{
    height: 16px;
    width: 16px;
  }
`

export const inputFields = styled.div`
  input[type=submit], input[type=text], input[type=password] {
    border: 2px solid var(--grey-middark);
    border-radius:4px;
    text-align: left;
    padding:15px 0 15px 12px;
    margin-bottom:20px;
    width: 96%;
    max-width: 550px;
    font-size: smaller;
    font-weight: bold;
  }
    
`

export const forgotLink = styled.a`
  display: inline-block;
  font-size: small;
  color: var(--link);
  margin-top: -8px;
`

export const showPassword = styled.a`
  float: right;
  font-size: small;
  color: var(--link);
`

export const loginError = styled.div`
  display: block;
  color: red;
  font-weight: bold;
  margin-top: 5px;
`

export const loginNotice = styled.div`
  display: block;
  font-weight: bold;
  margin-bottom: 15px;
`

export const signInBtn = styled.button`
  background: var(--main);
  color: var(--white);
  padding: 15px;
  margin-top: 22px;
  border: 1px var(--black) solid;
  border-radius:4px;
  max-width: 565px;
  width: 90%;
`

export const signUpBtn = styled.button`
  background: var(--main);
  color: var(--white);
  padding: 15px;
  border: 1px var(--black) solid;
  border-radius:4px;
  max-width: 565px;
  width: 90%;
`

export const toolTip = styled.div`
  color: var(--main);

  svg{
    width:30px;
    margin:20px 0;
    
  }
`

