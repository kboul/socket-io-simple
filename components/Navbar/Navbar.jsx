import { useCallback, useEffect, useMemo, useState } from "react";

import Styled from "./styles";
import { useStore } from "../../hooks";

export default function Navbar() {
  const notifications = useStore(
    useCallback((state) => state.notifications, [])
  );
  const notificationsPanelOpen = useStore(
    useCallback((state) => state.notificationsPanelOpen, [])
  );
  const socket = useStore(useCallback((state) => state.socket, []));
  const posts = useStore(useCallback((state) => state.posts, []));
  const setGlobalState = useStore(
    useCallback((state) => state.setGlobalState, [])
  );

  useEffect(() => {
    if (!socket) return;

    const eventListener = (data) => {
      const { receiverName, type } = data;
      setGlobalState({
        notifications: [...notifications, data],
        notificationsPanelOpen: true,
        posts: posts.map((p) =>
          p.username === receiverName ? { ...p, liked: type === "like" } : p
        ),
      });
    };
    socket.on("getNotification", eventListener);

    return () => socket.off("getNotification", eventListener);
  }, [notifications, posts, setGlobalState, socket]);

  const filteredNotifications = useMemo(
    () => notifications.filter((n) => n.type !== "unlike"),
    [notifications]
  );

  const handleIconToggle = () =>
    setGlobalState({ notificationsPanelOpen: !notificationsPanelOpen });

  const BellIcon =
    Styled[notificationsPanelOpen ? "HeroBellFilledIcon" : "HeroBellIcon"];

  return (
    <Styled.Container>
      <Styled.Logo>Logo</Styled.Logo>
      <Styled.IconsContainer>
        <Styled.IconContainer>
          <BellIcon onClick={handleIconToggle} />
          {filteredNotifications.length > 0 && (
            <Styled.Counter>{filteredNotifications.length}</Styled.Counter>
          )}
        </Styled.IconContainer>

        <Styled.IconContainer>
          <Styled.HeroMailIcon onClick={handleIconToggle} />
        </Styled.IconContainer>

        <Styled.IconContainer>
          <Styled.HeroCogIcon onClick={handleIconToggle} />
        </Styled.IconContainer>
      </Styled.IconsContainer>

      {notificationsPanelOpen && (
        <Styled.Notifications>
          {notifications.map(({ senderName, type }, id) => (
            <Styled.Notification key={id}>
              <Styled.NotificationReceiver>
                {senderName}
              </Styled.NotificationReceiver>
              {` ${type}d your post.`}
            </Styled.Notification>
          ))}
        </Styled.Notifications>
      )}
    </Styled.Container>
  );
}
