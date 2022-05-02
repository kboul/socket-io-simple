import johnUserImg from "./images/johnUserImg.jpeg";
import johnPostImg from "./images/johnPostImg.jpeg";
import monicaUserImg from "./images/monicaUserImg.jpeg";
import monicaPostImg from "./images/monicaPostImg.jpeg";
import steveUserImg from "./images/steveUserImg.jpeg";
import stevePostImg from "./images/stevePostImg.jpeg";
import helenUserImg from "./images/helenUserImg.jpeg";
import helenPostImg from "./images/helenPostImg.jpeg";
// Source: https://randomuser.me/photos

const posts = [
  {
    id: 1,
    username: "john",
    fullname: "John Keller",
    userImg: johnUserImg,
    postImg: johnPostImg,
    liked: false,
  },
  {
    id: 2,
    username: "monica",
    fullname: "Monica Stan",
    userImg: monicaUserImg,
    postImg: monicaPostImg,
    liked: false,
  },
  {
    id: 3,
    username: "steve",
    fullname: "Steve Curt",
    userImg: steveUserImg,
    postImg: stevePostImg,
    liked: false,
  },
  {
    id: 4,
    username: "helen",
    fullname: "Helen Armstrong",
    userImg: helenUserImg,
    postImg: helenPostImg,
    liked: false,
  },
];

export { posts };
