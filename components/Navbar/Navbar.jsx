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

Navbar.propTypes = {
  socket: PropTypes.object.isRequired,
};
