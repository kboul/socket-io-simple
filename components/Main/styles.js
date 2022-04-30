import styled from "styled-components";

const Container = styled.main`
  width: 50vh;
  border-radius: 5px;
  border: 0.5px solid lightseagreen;
`;

const Form = styled.form`
  height: 50vh;
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
  width: 50%;
  padding: 10px;
  margin-bottom: 20px;
`;

const LoginBtn = styled.button`
  width: 60%;
  padding: 10px;
  background-color: lightseagreen;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default { Container, Form, LoginBtn, UsernameInput, UsernameLabel };
