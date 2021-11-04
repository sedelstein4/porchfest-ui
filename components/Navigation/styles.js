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

export const PageInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-right: 20px;
`

export const PageTitle = styled.h1`
  flex: 1;
  color: var(--white);
  margin: 0;
  //line-height: 1em;
  display:inline-flex;
  justify-content: left;
  font-weight: bold;
  align-items: center;
  `

export const Hometown = styled.h3`
  margin: 0;
  color: var(--white);

`

export const IconBtn = styled.div`
  display: inline-flex;
  align-items: center;
  color:white;
  margin-right: 20px;
  flex: 1;
  justify-content: flex-end;
  width: 25px;
  height: 25px;

  svg{
    width: 30px;
    height: 30px;
  }
`

export const LikeBtn = styled.div`
  display: inline-flex;
  align-items: center;
  color:white;
  margin-right: 30px;
  flex: 1;
  justify-content: flex-end;
  
  .filled-heart{
    color: #F85858;
  }

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