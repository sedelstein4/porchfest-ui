import styled from 'styled-components'

export const container = styled.div`
  margin-top: 80px;
  width:100%;
`

export const header = styled.div`
  display: flex;
  position: fixed;
  padding: 20px 10px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: var(--main);
  margin: auto;
`

export const backBtn = styled.div`
  align-items: center;
  color: white;
  margin-right: 10px;

  svg{
    width: 25px !important;
    height: 25px !important;
  }
`

export const title = styled.div`
  color: var(--white);
  font-weight: bold;
  font-size: 1.9em;
  margin: 0;
  display: inline-flex;
  justify-content: left;
  align-items: center;
`

export const infoRow = styled.div`
  display:flex;
  align-items: center;
  border-bottom: 2px solid #dedede;
  padding-top:2px;
  justify-content: space-between;
`

export const infoType = styled.div`
  margin: 10px 0 12px 12px;
  color: #3e3e3e;
  font-size: 1.65em;
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

export const signout = styled.button`
  color: var(--white);
  background: var(--main);
  border: 2px solid var(--black);
  border-radius: 3px;
  font-weight: bold;
  font-size: 0.9em;
  
  width:90%;
  max-width:565px;
  margin: 30px 20px 0;
  padding: 15px 0 15px;
`

export const signoutTwo = styled.button`
  color: var(--white);
  background: red;
  border: 2px solid var(--black);
  border-radius: 3px;
  font-weight: bold;
  font-size: 0.9em;
  
  width:90%;
  max-width:565px;
  margin: 30px 20px;
  padding: 15px 0 15px;
`

export const buttonDiv = styled.div`
    text-align: center;
    `
export const toolTip = styled.div`
  display:inline-block;
  text-align: center;
  color: var(--main);
  margin-left:10px;
  margin-top:8px;
  margin-bottom:-4px;
  svg{
    display:block;
    margin:auto;
    width:30px !important;
    height:30px !important;
    
  }
`