import { useCallback, useEffect, useMemo, useState } from "react";

import Styled from "./styles";
import { useStore } from "../../hooks";
import { getUserInitials } from "./utils";

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
  const user = useStore(useCallback((state) => state.user, []));

  useEffect(() => {
    if (!socket) return;

    const eventListener = (data) => {
      const { receiverName, type } = data;
      setGlobalState({
        notifications: [...notifications, data],
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

  const handleBellIconToggle = () => {
    if (notifications.length === 0) return;
    setGlobalState({
      notificationsPanelOpen: !notificationsPanelOpen,
      notifications: notificationsPanelOpen ? [] : notifications,
    });
  };

  const BellIcon =
    Styled[notificationsPanelOpen ? "HeroBellFilledIcon" : "HeroBellIcon"];

  return (
    <Styled.Container>
      <Styled.Logo>Logo</Styled.Logo>
      <Styled.IconsContainer>
        <Styled.IconContainer>
          <BellIcon onClick={handleBellIconToggle} />
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

        <Styled.IconContainer>
          <Styled.AvatarIcon>{getUserInitials(posts, user)}</Styled.AvatarIcon>
        </Styled.IconContainer>
      </Styled.IconsContainer>

      {notificationsPanelOpen && (
        <Styled.Notifications>
          {filteredNotifications.map(({ senderName, type }, id) => (
            <Styled.Notification key={id}>
              <Styled.NotificationReceiver>
                {senderName}
              </Styled.NotificationReceiver>
              {` ${type}${type === "comment" ? "e" : ""}d your post.`}
            </Styled.Notification>
          ))}
        </Styled.Notifications>
      )}
    </Styled.Container>
  );
}
