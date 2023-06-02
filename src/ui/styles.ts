import styled from "styled-components";
import checkIcon from "../assets/icons/checkIcon.svg";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  padding: 24px;
  font-size: 13px;

  img {
    width: 5px;
    margin: 0px 10px;
  }
`;

export const Title = styled.h1`
  color: #1e1e1e;
  font-size: 24px;
  padding: 30px 0 30px;
`;

export const TextInput = styled.input`
  width: 500px;
`;

export const Button = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 113px;
  height: 42px;
  border-radius: 4px;
  color: #fff;
  background-color: #000;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: { color?: string }) => props.color};
  color: #fff;
  height: 28px;
  width: 84px;
  padding: 5px;
  border-radius: 2px;

  span {
    font-size: 10px;
  }
`;

export const ContainerRadio = styled.div`
  input {
    position: absolute;
    opacity: 0;
    width: 42px;
    height: 42px;
  }

  div {
    background-color: ${(props: { color?: string }) => props.color};
    width: 42px;
    height: 42px;
    border-radius: 6px;
  }

  input:checked + div {
    border: 2px solid black;
  }

  input:checked + div {
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const ColorInputs = styled.div`
  display: flex;
  gap: 6px;
`;

export const ItemDiv = styled.div`
  display: flex;
  flex-direction: ${(props: { row?: boolean }) =>
    props.row ? "row" : "column"};
  align-items: ${(props: { row?: boolean }) =>
    props.row ? "center" : "normal"};
  padding: 10px 0px;
  gap: 20px;

  input {
    width: 277px;
    height: 42px;
    padding: 10px;
    background-color: #f4f4f4;
    border: 0;
  }
`;
