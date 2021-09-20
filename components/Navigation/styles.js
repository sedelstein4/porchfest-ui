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
  color: var(--white);
  font-size: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
  :hover {
    color: var(--black);
  }
  
`

export const IconBtn = styled(NavLink)`
  justify-content:right;
  padding-right:15px;
`

export const backToHome = styled.div` 
    margin: 3rem 0 0;
`
export const TopContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: var(--main);
  margin:auto;
  `

export const header = styled.div`
   flex: 1;
  padding: 20px 15px;
  color: var(--white);
  font-size: 1.5em;
  line-height: 1em;
  display:inline-flex;
  justify-content: left;
  `