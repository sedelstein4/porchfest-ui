import styled from "styled-components";

export const Modal = styled.div`
  
  .dialog{
    position: fixed;
    inset: 0;
    overflow-y: auto;
    color: red;
    background: red;
  }
  
  span{
    display: inline-block;
    vertical-align: middle;
    height: 100vh;
  }
`;

export const StyledModalBody = styled.div`
  padding-top: 10px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

export const StyledModal = styled.div`
  background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px;
`;
export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
