import Styled from "./styles";
import { useStore } from "../../hooks";

export default function Card() {
  const posts = useStore((state) => state.posts);
  const socket = useStore((state) => state.socket);
  const user = useStore((state) => state.user);
  const setGlobalState = useStore((state) => state.setGlobalState);

  const handleIconClick = (post, type) => () => {
    if (!socket) return;

    if (type.includes("like")) {
      const newPosts = posts.map((p) =>
        p.id === post.id ? { ...p, liked: !p.liked } : p
      );
      setGlobalState({ posts: newPosts });
    }

    if (user === post.username) return;
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  return posts.map((post) => {
    const { liked } = post;
    const HeartIcon = Styled[liked ? "HeroHeartFilledIcon" : "HeroHeartIcon"];
    return (
      <Styled.Container key={post.id}>
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
          <HeartIcon
            onClick={handleIconClick(post, liked ? "unlike" : "like")}
          />
          <Styled.HeroChatIcon onClick={handleIconClick(post, "message")} />
          <Styled.HeroShareIcon onClick={handleIconClick(post, "share")} />
          <Styled.HeroInfoIcon />
        </Styled.IconsContainer>
      </Styled.Container>
    );
  });
}
