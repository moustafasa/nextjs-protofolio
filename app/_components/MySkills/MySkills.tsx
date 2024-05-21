import { FaHtml5, FaJs } from "react-icons/fa6";
import SectionHead from "../SectionHead";
import Skill from "./Skill";
import skills from "./skills";

function MySkills() {
  return (
    <div id="MySkills" className="section">
      <SectionHead title="my skills" />
      <div className="container grid grid-cols-responsive place-items-center py-5 gap-12">
        {skills.map((skill) => (
          <Skill key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default MySkills;
