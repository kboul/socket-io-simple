import { useEffect, useState } from "react";
import io from "socket.io-client";

import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import Styled from "./styles";
import { posts } from "./constants";

export default function Main() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io.connect(process.env.BASE_URL, { path: "/api/socketio" }));
  }, []);

  useEffect(() => {
    if (socket && user) socket.emit("newUser", user);
  }, [socket, user]);

  return (
    <Styled.Container>
      {user ? (
        <>
          <Navbar socket={socket} />
          {posts.map((post) => (
            <Card key={post.id} post={post} socket={socket} user={user} />
          ))}
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
