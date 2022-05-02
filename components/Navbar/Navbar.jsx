import { useCallback, useEffect, useState } from "react";

import Styled from "./styles";
import { useStore } from "../../hooks";

export default function Navbar() {
  const socket = useStore(useCallback((state) => state.socket, []));
  const posts = useStore(useCallback((state) => state.posts, []));
  const setGlobalState = useStore(
    useCallback((state) => state.setGlobalState, [])
  );

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!socket) return;

    const eventListener = (data) => {
      const { receiverName, type } = data;
      setGlobalState({
        posts: posts.map((p) =>
          p.username === receiverName ? { ...p, liked: type === "like" } : p
        ),
      });
      setNotifications((prevState) => [...prevState, data]);
    };
    socket.on("getNotification", eventListener);

    return () => socket.off("getNotification", eventListener);
  }, [posts, setGlobalState, socket]);

  const filteredNotifications = notifications.filter(
    (n) => n.type !== "unlike"
  );

  return (
    <Styled.Container>
      <Styled.Logo>Logo</Styled.Logo>
      <Styled.IconsContainer>
        <Styled.IconContainer>
          <Styled.HeroBellIcon />
          {filteredNotifications.length > 0 && (
            <Styled.Counter>{filteredNotifications.length}</Styled.Counter>
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
