import styled, { css } from "styled-components";
import Image from "next/image";
import {
  ChatIcon,
  HeartIcon,
  InformationCircleIcon,
  ShareIcon,
} from "@heroicons/react/outline";

const Container = styled.div`
  height: 280px;
`;

const Fullname = styled.span`
  margin-left: 10px;
`;

const Icon = css`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 5px;
`;

const HeroChatIcon = styled(ChatIcon)(Icon);
const HeroHeartIcon = styled(HeartIcon)(Icon);
const HeroInfoIcon = styled(InformationCircleIcon)(Icon);
const HeroShareIcon = styled(ShareIcon)(Icon);

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  padding-left: 3px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  font-weight: 500;
  font-size: 14px;
`;

const PostImg = styled(Image)`
  object-fit: cover !important;
`;

const PostImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const UserImgContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

const UserImg = styled(Image)`
  border-radius: 50%;
`;

export default {
  Container,
  Fullname,
  HeroChatIcon,
  HeroHeartIcon,
  HeroInfoIcon,
  HeroShareIcon,
  IconsContainer,
  InfoContainer,
  PostImg,
  PostImgContainer,
  UserImg,
  UserImgContainer,
};
