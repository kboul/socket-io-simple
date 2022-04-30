import styled, { css } from "styled-components";
import { BellIcon, CogIcon, MailIcon } from "@heroicons/react/solid";

const Container = styled.div`
  height: 50px;
  background-color: lightseagreen;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Counter = styled.div`
  width: 5px;
  height: 5px;
  background-color: red;
  border-radius: 50%;
  padding: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: -5px;
`;

const Icon = css`
  width: 20px;
  height: 20px;
  color: white;
`;

const HeroBellIcon = styled(BellIcon)(Icon);
const HeroCogIcon = styled(CogIcon)(Icon);
const HeroMailIcon = styled(MailIcon)(Icon);

const Logo = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const IconContainer = styled.div`
  margin-left: 10px;
  cursor: pointer;
  position: relative;
  margin-right: 15px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default {
  Container,
  Counter,
  HeroBellIcon,
  HeroCogIcon,
  HeroMailIcon,
  IconContainer,
  IconsContainer,
  Logo,
};
