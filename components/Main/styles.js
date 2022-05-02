import styled from "styled-components";

const CardContainer = styled.div`
  width: 60vh;
  border-radius: 5px;
  border: 0.5px solid lightseagreen;
`;

const FormContainer = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 25vw;
  height: 25vh;
  border-radius: 5px;
  border: 0.5px solid lightseagreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UsernameLabel = styled.span`
  font-weight: bold;
  color: lightseagreen;
  position: absolute;
  top: 15px;
  right: 15px;
`;

const UsernameInput = styled.input`
  width: 82%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightseagreen;
  margin-bottom: 20px;
`;

const LoginBtn = styled.button`
  width: 90%;
  padding: 10px;
  background-color: lightseagreen;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default {
  CardContainer,
  Form,
  FormContainer,
  LoginBtn,
  UsernameInput,
  UsernameLabel,
};
