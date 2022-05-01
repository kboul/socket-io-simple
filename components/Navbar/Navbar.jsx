import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Styled from "./styles";

export default function Navbar({ socket }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!socket) return;

    const eventListener = (data) => {
      setNotifications((prevState) => [...prevState, data]);
    };

    socket.on("getNotification", eventListener);

    return () => socket.off("getNotification", eventListener);
  }, [socket]);

  return (
    <Styled.Container>
      <Styled.Logo>Logo</Styled.Logo>
      <Styled.IconsContainer>
        <Styled.IconContainer>
          <Styled.HeroBellIcon />
          <Styled.Counter>2</Styled.Counter>
        </Styled.IconContainer>
        <Styled.IconContainer>
          <Styled.HeroMailIcon />
          <Styled.Counter>2</Styled.Counter>
        </Styled.IconContainer>
        <Styled.IconContainer>
          <Styled.HeroCogIcon />
          <Styled.Counter>2</Styled.Counter>
        </Styled.IconContainer>
      </Styled.IconsContainer>
    </Styled.Container>
  );
}

Navbar.propTypes = {
  socket: PropTypes.object.isRequired,
};
