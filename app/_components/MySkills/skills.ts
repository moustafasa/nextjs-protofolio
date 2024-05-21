import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaGulp,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import PugImage from "@/public/imgs/pug.png";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const skills: Skill[] = [
  {
    Icon: FaHtml5,
    title: "html5",
    textColor: "text-html",
    shadowColor: "shadow-html/50",
  },
  {
    Icon: FaCss3,
    title: "css3",
    textColor: "text-css",
    shadowColor: "shadow-css/50",
  },
  {
    Icon: FaJs,
    title: "js",
    textColor: "text-js",
    shadowColor: "shadow-js/50",
  },
  {
    Icon: FaSass,
    title: "sass",
    textColor: "text-sass",
    shadowColor: "shadow-sass/50",
  },
  {
    Image: PugImage,
    title: "pug",
    textColor: "text-pug",
    shadowColor: "shadow-pug/50",
  },
  {
    Icon: FaGulp,
    title: "gulp",
    textColor: "text-gulp",
    shadowColor: "shadow-gulp/50",
  },
  {
    Icon: FaReact,
    title: "react",
    textColor: "text-react",
    shadowColor: "shadow-react/50",
  },
  {
    Icon: SiRedux,
    title: "redux",
    textColor: "text-redux",
    shadowColor: "shadow-redux/50",
  },
  {
    Icon: RiNextjsFill,
    title: "nextjs",
    textColor: "text-next",
    shadowColor: "shadow-next/50",
  },
  {
    Icon: FaGithub,
    title: "github",
    textColor: "text-next",
    shadowColor: "shadow-white/50",
  },
  {
    Icon: FaGitAlt,
    title: "git",
    textColor: "text-git",
    shadowColor: "shadow-git/50",
  },
];

export default skills;
