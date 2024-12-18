import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: var(--main);
`

export const PageBtn = styled.a`
  flex: 1;
  padding: 10px 0;
  color: var(--white);
  font-size: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

export const backToHome = styled.div` 
    margin: 3rem 0 0;
`

// cardrow
export const rowContainer = styled.div`
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: 0 1fr 0;
  align-content: start;

  > * {
    grid-column: 2 / -2;
  }
`

export const row = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: 0;
  grid-template-rows: minmax(235px,1fr);
  grid-auto-flow: column;
  grid-auto-columns: 215px;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  margin-bottom: calc(-.25 * 25px);

  @media (max-width: 768px) {
    grid-template-rows: minmax(150px, 1fr);
    grid-auto-columns: calc(50% - 25px * 2);
  }

  :before,
  :after {
    content: '';
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

export const genreHeading = styled.div`
  display: inline-flex;
`

export const genre = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 10px;
`

export const arrowIcon = styled.div`
  margin-left: 8px;
    svg{
      width:15px;
    }
    
`

// artistcard
export const cardContainer = styled.div`
  width: 180px;
  height: 180px;
  scroll-snap-align: center;
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  img {
    border-radius: 3px;
    border: 1px solid #939393;
    object-fit: cover;
    object-position: top center;
  }
`

export const img = styled.div`
  //margin:5px;
    
`
export const name = styled.p`
  text-align: left;
  font-size: 1rem;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`

//artist list
export const resultContainer = styled.div`
  display:flex;
  align-items: center;
  border-bottom: 1px solid var(--grey-mid);
  padding: 15px 0;
  
  a{
    display: inline-flex;
    width: 100%;
  }
  
    img{
      width:50px;
      height:50px;
      object-fit: cover;
      object-position: top center;
      border-radius: 50%;
      border: 1px solid var(--grey-dark);
      margin-right: 15px;
    }
  `

export const resultName = styled.div`
  justify-content: center;
  font-size: 18pt;
  margin-bottom:5px;
  `

export const resultType = styled.div`
  font-size: 11pt;
  color: var(--grey-dark);
  `

export const resultIcon = styled.div`
    margin-left: auto;
    margin-right: var(--mobile-margin);
    svg{
      width:18px;
    }
    
`

export const SortBtn = styled.div`
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

export const SortDropdown = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  box-shadow: var(--shadow);
  margin-top: 108px;
  background: var(--white);
  z-index: 100;
  text-align: left;
  color: black;
  padding: 5px;

  input[type='radio'] {
    opacity: 0;
    position: fixed;
  }

  input[type='radio']:checked + label {
    background: var(--main);
    color: white;
  }

  input[type='radio']:checked + label:hover {
    background: var(--main-hover);
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
