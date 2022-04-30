import Styled from "./styles";

export default function Card({ post }) {
  if (!post) return null;
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
        <Styled.HeroHeartIcon />
        <Styled.HeroChatIcon />
        <Styled.HeroShareIcon />
        <Styled.HeroInfoIcon />
      </Styled.IconsContainer>
    </Styled.Container>
  );
}
