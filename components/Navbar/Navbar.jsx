import { useEffect, useState } from "react";

import Styled from "./styles";
import { useStore } from "../../hooks";

export default function Navbar() {
  const socket = useStore((state) => state.socket);
  const posts = useStore((state) => state.posts);
  const setGlobalState = useStore((state) => state.setGlobalState);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!socket) return;

    const eventListener = (data) => {
      const { receiverName, type } = data;
      setGlobalState({
        posts: posts.map((p) =>
          p.username === receiverName ? { ...p, liked: true } : p
        ),
      });
      setNotifications((prevState) => [...prevState, data]);
    };
    socket.on("getNotification", eventListener);

    return () => socket.off("getNotification", eventListener);
  }, [socket]);

  console.log(notifications);

  return (
    <Styled.Container>
      <Styled.Logo>Logo</Styled.Logo>
      <Styled.IconsContainer>
        <Styled.IconContainer>
          <Styled.HeroBellIcon />
          {notifications.length > 0 && (
            <Styled.Counter>{notifications.length}</Styled.Counter>
          )}
        </Styled.IconContainer>

        <Styled.IconContainer>
          <Styled.HeroMailIcon />
        </Styled.IconContainer>

        <Styled.IconContainer>
          <Styled.HeroCogIcon />
        </Styled.IconContainer>
      </Styled.IconsContainer>
    </Styled.Container>
  );
}
