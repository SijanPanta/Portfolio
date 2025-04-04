import { useState } from "react";
import "./SkillGroupIcons.css";
import HTML5Logo from "../HTML5Logo/HTML5Logo";
import CSS3Logo from "../CSS3Logo/CSS3Logo";
import JavaScriptLogo from "../JavaScriptLogo/JavaScriptLogo";
import TypeScriptLogo from "../TypeScriptLogo/TypeScriptLogo";
import ReactLogo from "../ReactLogo/ReactLogo";
import TailwindLogo from "../ReduxLogo/ReduxLogo";
interface SkillGroupIconsProps {}

export const SkillGroupIcons = ({ ...props }: SkillGroupIconsProps) => {
  const [technicalStack] = useState<{ image: object }[]>([
    {
      image: <HTML5Logo />,
    },
    {
      image: <CSS3Logo />,
    },
    {
      image: <JavaScriptLogo />,
    },
    {
      image: <TypeScriptLogo />,
    },
    {
      image: <ReactLogo />,
    },
    {
      image: <TailwindLogo />,
    },
  ]);

  return (
    <>
      <div className="tech-stack-container">
        {technicalStack.map((skill) => (
          <div className="tech-stack" key={Math.random()}>
            {skill.image}
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillGroupIcons;
