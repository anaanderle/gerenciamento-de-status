import styled from "styled-components";

export const Title = styled.h1`
  color: #1e1e1e;
  font-size: 24px;
`;

export const TextInput = styled.input`
  width: 500px;
`;

export const Button = styled.button`
  width: 113px;
  height: 42px;
  color: #1e1e1e;
  background-color: #000;
  color: #fff;
  border-radius: 4px;
`;

export const Label = styled.label``;

export const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  color: #fff;
  height: 28px;
  width: 84px;
  overflow: hidden;
  padding: 5px;
  box-sizing: border-box;
  white-space: nowrap;
`;

export const InputRadio = styled.input``;

export const InputRadioDiv = styled.div`
  input {
    position: absolute;
    opacity: 0;
  }
  div {
    display: inline-block;
    background-color: ${(props) => props.color};
    width: 20px;
    height: 20px;
  }
`;

export const ColorInputs = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  padding: 24px;
`;
