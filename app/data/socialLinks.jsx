import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import {FaLinkedinIn, FaMedium} from "react-icons/fa6";

const socialLinks = [
  {
    id: "github",
    name: "Github",
    url: "https://github.com/darshittchovatiya9",
    icon: <LuGithub size={20} color="#FFFFFF" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "www.linkedin.com/in/darshittchovatiya9",
    icon: <FaLinkedinIn size={20} color="#FFFFFF" />,
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/_darshitt_9_",
    icon: <FaInstagram  size={20} color="#FFFFFF" />,
  },
  {
    id: "medium",
    name: "Medium",
    url: "https://medium.com/@darshitt.chovatiya9",
    icon: <FaMedium size={20} color="#FFFFFF" />,
  }
];

export default socialLinks;
