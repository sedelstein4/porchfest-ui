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
    width: 30px !important; //these were getting overridden by some default styling upon refresh (svg-inline--fa, fa-w-14)
    height: 30px !important;
    margin-bottom: 5px;
  }
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
  margin: auto;
  
  svg{
    width: 30px !important;
    height: 30px !important;
  }
  `

export const PageInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-right: 20px;
  padding: 20px 10px;
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

export const SortBtn = styled.div`
  color: white;
  margin-left: auto;
  margin-right: 15px;
  align-self: center;
`

export const SortDropdown = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  box-shadow: var(--shadow);
  margin-top: 53px;
  background: var(--white);
  z-index: 100;
  text-align: left;
  color: black;
  padding: 5px;
  right: 10px;

  input[type='radio'] {
    opacity: 0;
    position: fixed;
  }

  input[type='radio']:checked + label {
    background: var(--main);
    color: white;
  }

  input[type='radio']:checked + label:hover {
    //background: var(--main-hover);
    color: white;
  }
`

export const ButtonLabel = styled.label`
    display: block;
    background: var(--white);
    padding: 5px 10px;
    font-size: 16px;

    :hover {
        cursor: pointer;
        background: var(--grey-light);
`

export const LikeBtn = styled.div`
  display: inline-flex;
  align-items: center;
  color:white;
  margin-right: 30px;
  flex: 1;
  justify-content: flex-end;
  
  .filled-heart{
    color: var(--heart-red);
  }
  
`

export const BackBtn = styled.div`
  display: ${(props) => (props.show ? 'inline-flex' : 'none')};
  align-items: center;
  color: white;
  margin: 0 10px;
`