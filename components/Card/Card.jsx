import { useState } from "react";

import Styled from "./styles";

export default function Card({ post }) {
  const [liked, setLiked] = useState(false);

  if (!post) return null;

  const HeartIcon = Styled[liked ? "HeroHeartFilledIcon" : "HeroHeartIcon"];

  const handleHeartIconClick = () => setLiked((prevState) => !prevState);

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
        <HeartIcon onClick={handleHeartIconClick} />
        <Styled.HeroChatIcon />
        <Styled.HeroShareIcon />
        <Styled.HeroInfoIcon />
      </Styled.IconsContainer>
    </Styled.Container>
  );
}
