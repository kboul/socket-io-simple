import { useEffect, useState } from "react";
import io from "socket.io-client";

import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import Styled from "./styles";
import { useStore } from "../../hooks";

export default function Main() {
  const socket = useStore((state) => state.socket);
  const user = useStore((state) => state.user);
  const setGlobalState = useStore((state) => state.setGlobalState);

  const [username, setUsername] = useState("");

  useEffect(() => {
    setGlobalState({
      socket: io.connect(process.env.BASE_URL, { path: "/api/socketio" }),
    });
  }, [setGlobalState]);

  useEffect(() => {
    if (socket && user) socket.emit("newUser", user);
  }, [socket, user]);

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
          <Styled.LoginBtn onClick={() => setGlobalState({ user: username })}>
            Login
          </Styled.LoginBtn>
        </Styled.Form>
      )}
    </Styled.Container>
  );
}
