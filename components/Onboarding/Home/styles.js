import styled from "styled-components";

export const homeContainer = styled.div`
  text-align:center;
`

export const title = styled.div`
  color: var(--main);
  font-weight: bold;
  font-size: 3.3em;
  margin-top: 80px;
  margin-bottom: 10px;
`

export const btn = styled.button`
  display:flex;
  color: var(--main);
  background: none;
  border: 2px solid var(--grey-middark);
  border-radius: 5px;
  padding: 15px 30px;
  width:45%;
  max-width: 550px;
  white-space: nowrap;
  justify-content: center;
  margin: auto;
  font-weight: bold;
  font-size: smaller;
`