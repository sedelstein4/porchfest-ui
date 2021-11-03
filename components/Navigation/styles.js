import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background: var(--main);
`

export const NavLink = styled.a`
  flex: 1;
  padding: 10px 0;
  color: var(--black);
  font-size: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  &.active{
    color: var(--secondary);
  }
  
  svg{
    width: 30px;
    margin-bottom: 5px;
  }
  
`

export const backToHome = styled.div` 
    margin: 3rem 0 0;
`
export const TopContainer = styled.div`
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

export const PageTitle = styled.h1`
  flex: 1;
  color: var(--white);
  font-size: 1.7em;
  margin: 0;
  margin-right: 20px;
  //line-height: 1em;
  display:inline-flex;
  justify-content: left;
  font-weight: bold;
  align-items: center;
  `

export const IconBtn = styled.div`
  display: ${(props) => (props.show ? 'inline-flex' : 'none')};
  align-items: center;
  color:white;
  margin-right: 20px;

  svg{
    width: 30px;
    height: 30px;
  }
`

export const BackBtn = styled.div`
  display: ${(props) => (props.show ? 'inline-flex' : 'none')};
  align-items: center;
  color: white;
  margin-right: 10px;

  svg{
    width: 30px;
    height: 30px;
  }
`