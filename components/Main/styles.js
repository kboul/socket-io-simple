import styled from "styled-components";

const CardContainer = styled.div`
  width: 60vh;
  border-radius: 5px;
  border: 0.5px solid lightseagreen;
`;

const Container = styled.main`
  height: ${({ user }) => (!user ? "100vh" : "auto")};
  display: flex;
  align-items: ${({ user }) => (!user ? "center" : "")};
  justify-content: center;
  margin-top: ${({ user }) => (!user ? 0 : "60px")};
  margin-bottom: ${({ user }) => (!user ? 0 : "20px")};
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

export default {
  Container,
  CardContainer,
  Form,
  LoginBtn,
  UsernameInput,
  UsernameLabel,
};
