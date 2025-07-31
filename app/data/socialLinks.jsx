import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import {FaLinkedinIn, FaMedium} from "react-icons/fa6";

const socialLinks = [
  {
    id: "github",
    name: "Github",
    url: "https://github.com/darshit15-02",
    icon: <LuGithub size={20} color="#FFFFFF" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/darshit-chovatiya-0672a827a",
    icon: <FaLinkedinIn size={20} color="#FFFFFF" />,
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:darshit.jbs07@gmail.com",
    icon: <MdOutlineMail size={20} color="#FFFFFF" />,
  },
  {
    id: "medium",
    name: "Medium",
    url: "https://medium.com/@darshit.patel07",
    icon: <FaMedium size={20} color="#FFFFFF" />,
  }
];

export default socialLinks;
