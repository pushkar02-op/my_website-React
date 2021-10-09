import React, { useState } from "react";
import Timeline from "../timeline/Timeline";
import "./about.scss";
import { CgCPlusPlus } from "react-icons/cg";
import { FaJava, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiDocker,
  SiKubernetes,
  SiMysql,
  SiMicrosoftazure,
  SiInformatica,
  SiVisualstudio,
  SiGithub,
} from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiLinux,
  DiPython,
  DiGit,
} from "react-icons/di";

const tools = [
  {
    toolIcon: SiVisualstudio,
    toolname: "VS Code",
  },
  {
    toolIcon: SiGithub,
    toolname: "Github",
  },
  {
    toolIcon: DiGit,
    toolname: "Git",
  },
  {
    toolIcon: DiLinux,
    toolname: "Linux",
  },
];

const icons = [
  {
    icon: CgCPlusPlus,
    name: "C++",
  },
  {
    icon: FaJava,
    name: "Java",
  },
  {
    icon: FaAws,
    name: "Aws",
  },
  {
    icon: SiRedux,
    name: "Redux",
  },
  {
    icon: SiDocker,
    name: "Docker",
  },
  {
    icon: SiKubernetes,
    name: "Kubernetes",
  },
  {
    icon: SiMysql,
    name: "MySql",
  },
  {
    icon: SiMicrosoftazure,
    name: "Azure",
  },
  {
    icon: SiInformatica,
    name: "Informatica",
  },
  {
    icon: DiJavascript1,
    name: "Javascript",
  },
  {
    icon: DiReact,
    name: "React Js",
  },

  {
    icon: DiPython,
    name: "Python",
  },
];

export default function About() {
  const [color, setcolor] = useState("#15023a");
  const [selected, setselected] = useState();

  const tool = tools.map((t, id) => {
    const Tool = t.toolIcon;
    const toolname = t.toolname;

    return (
      <div
        className="toolitem"
        onMouseEnter={() => {
          setselected(toolname);
          setcolor("white");
        }}
        onMouseLeave={() => setcolor("#15023a")}
      >
        <Tool
          color={toolname === selected ? color : "#15023a"}
          fontSize="4rem"
        />
        <h4>{toolname}</h4>
      </div>
    );
  });

  const icon = icons.map((genre, idx) => {
    const Icon = genre.icon;
    const name = genre.name;

    return (
      <div
        className="item"
        onMouseEnter={() => {
          setselected(name);
          setcolor("white");
        }}
        onMouseLeave={() => setcolor("#15023a")}
      >
        <Icon color={name === selected ? color : "#15023a"} fontSize="4rem" />
        <h4>{name}</h4>
      </div>
    );
  });
  return (
    <div className="about" id="about">
      <div className="lefttab">
        <Timeline />
      </div>

      <div className="righttab">
        <div className="skills">
          <h2>Professional Skillset</h2>
          <div className="icon">{icon}</div>
        </div>
        <div className="tools">
          <h2>Tools I Use</h2>
          <div className="tool">{tool}</div>
        </div>
      </div>
    </div>
  );
}
