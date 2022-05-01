import { useState } from "react";
import PropTypes from "prop-types";

import Styled from "./styles";

export default function Card({ post, socket, user }) {
  const [liked, setLiked] = useState(false);

  if (!post) return null;

  const HeartIcon = Styled[liked ? "HeroHeartFilledIcon" : "HeroHeartIcon"];

  const handleIconClick = (type) => {
    if (!socket) return;

    setLiked(true);
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  return (
    <Styled.Container>
      <Styled.InfoContainer>
        <Styled.UserImgContainer>
          <Styled.UserImg layout="fill" src={post.userImg} />
        </Styled.UserImgContainer>
        <Styled.Fullname>{post.fullname}</Styled.Fullname>
      </Styled.InfoContainer>

      <Styled.PostImgContainer>
        <Styled.PostImg layout="fill" src={post.postImg} />
      </Styled.PostImgContainer>

      <Styled.IconsContainer>
        <HeartIcon onClick={() => handleIconClick("like")} />
        <Styled.HeroChatIcon onClick={() => handleIconClick("message")} />
        <Styled.HeroShareIcon onClick={() => handleIconClick("share")} />
        <Styled.HeroInfoIcon />
      </Styled.IconsContainer>
    </Styled.Container>
  );
}

Card.propTypes = {
  post: PropTypes.object.isRequired,
  socket: PropTypes.object,
  user: PropTypes.string.isRequired,
};
