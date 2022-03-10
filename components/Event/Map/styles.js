import styled from "styled-components";

export const nowViewing = styled.div`
  position: absolute; //otherwise pushes the navbar
  left: 50%;
  top: 50%;
  transform: translate(-50%,-100%);
  z-index: 1;
`