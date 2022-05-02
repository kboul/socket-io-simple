import styled, { css } from "styled-components";
import { BellIcon as BellFilledIcon } from "@heroicons/react/solid";
import { BellIcon, CogIcon, MailIcon } from "@heroicons/react/outline";

const Container = styled.div`
  height: 50px;
  background-color: lightseagreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: relative;
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
const HeroBellFilledIcon = styled(BellFilledIcon)(Icon);
const HeroCogIcon = styled(CogIcon)(Icon);
const HeroMailIcon = styled(MailIcon)(Icon);

const Logo = styled.span`
  margin-left: 10px;
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

const Notifications = styled.div`
  position: absolute;
  z-index: 1;
  top: 55px;
  right: 5px;
  background-color: white;
  color: black;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  border: 1px solid lightseagreen;
  border-radius: 5px;
  min-height: 100px;
  max-height: 362px;
  overflow-y: auto;
`;

const Notification = styled.span`
  padding: 5px;
  font-size: 14px;
`;

const NotificationReceiver = styled.span`
  font-weight: bold;
`;

export default {
  Container,
  Counter,
  HeroBellIcon,
  HeroBellFilledIcon,
  HeroCogIcon,
  HeroMailIcon,
  IconContainer,
  IconsContainer,
  Logo,
  Notifications,
  Notification,
  NotificationReceiver,
};
