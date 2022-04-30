import { useState } from "react";

import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";

import Styled from "./styles";

export default function Main() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  return (
    <Styled.Container>
      {user ? (
        <>
          <Navbar />
          <Card />
          <Styled.UsernameLabel>{user}</Styled.UsernameLabel>
        </>
      ) : (
        <Styled.Form>
          <Styled.UsernameInput
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            value={username}
          />
          <Styled.LoginBtn onClick={() => setUser(username)}>
            Login
          </Styled.LoginBtn>
        </Styled.Form>
      )}
    </Styled.Container>
  );
}
