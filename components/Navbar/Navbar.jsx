import Styled from "./styles";

export default function Navbar() {
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
