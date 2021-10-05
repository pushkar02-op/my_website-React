import { useState } from "react";
import "./work.scss";

export default function Work() {
  const [currentSlide, setcurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "https://camo.githubusercontent.com/f54bd475c0abe0d8dfd979c73d81ea0ee7b3fc0fae894966a64797bcc2b09e7a/687474703a2f2f73696d706c6569636f6e732e6f72672f69636f6e732f616d617a6f6e6177732e737667",
      title: "Hybrid Cloud using Terraform",
      desc: "Deploy Wordpress+Mysql on AWS and Create a NAT Gateway and Bastion host for management. ",
      link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6724415128483225600",
    },
    {
      id: "2",
      icon: "https://camo.githubusercontent.com/f54bd475c0abe0d8dfd979c73d81ea0ee7b3fc0fae894966a64797bcc2b09e7a/687474703a2f2f73696d706c6569636f6e732e6f72672f69636f6e732f616d617a6f6e6177732e737667",
      title: "Hybrid Cloud using Terraform",
      desc: "Hybrid Multi Cloud Setup- Wordpress on Kubernetes and data stored in AWS RDS.",
      link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6721847584970878977",
    },
    {
      id: "3",
      icon: "https://camo.githubusercontent.com/f54bd475c0abe0d8dfd979c73d81ea0ee7b3fc0fae894966a64797bcc2b09e7a/687474703a2f2f73696d706c6569636f6e732e6f72672f69636f6e732f616d617a6f6e6177732e737667",
      title: "Hybrid Cloud using Terraform",
      desc: "Deploy Wordpress+MySql on AWS in our own VPC.",
      link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6707302359632015360",
    },
    {
      id: "4",
      icon: "https://camo.githubusercontent.com/f54bd475c0abe0d8dfd979c73d81ea0ee7b3fc0fae894966a64797bcc2b09e7a/687474703a2f2f73696d706c6569636f6e732e6f72672f69636f6e732f616d617a6f6e6177732e737667",
      title: "Hybrid Cloud using Terraform",
      desc: "Infrastructure as a Code(IAAC) using AWS Services and TERRAFORM + GITHUB.(using EFS instead of EBS)",
      link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6701448420307066880",
    },
    {
      id: "5",
      icon: "https://camo.githubusercontent.com/f54bd475c0abe0d8dfd979c73d81ea0ee7b3fc0fae894966a64797bcc2b09e7a/687474703a2f2f73696d706c6569636f6e732e6f72672f69636f6e732f616d617a6f6e6177732e737667",
      title: "Hybrid Cloud using Terraform",
      desc: "Infrastructure as a Code(IAAC) using AWS Services and TERRAFORM + GITHUB.",
      link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6678197101538754560",
    },
    {
      id: "6",
      icon: "https://camo.githubusercontent.com/f54bd475c0abe0d8dfd979c73d81ea0ee7b3fc0fae894966a64797bcc2b09e7a/687474703a2f2f73696d706c6569636f6e732e6f72672f69636f6e732f616d617a6f6e6177732e737667",
      title: "Aws EKS Cluster",
      desc: "Implementing EKS Cluster with different AWS Services Like EC2 , EFS, ELB and EBS.",
      link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6689779072286937088",
    },
    {
      id: "7",
      icon: "https://camo.githubusercontent.com/c823b22386c31361d21a4c8e76aa8c7f01b2119a0e4cca6fdcf267001735b94e/687474703a2f2f73696d706c6569636f6e732e6f72672f69636f6e732f616e7369626c652e737667",
      title: "Ancible AWS",
      desc: "Ansible-: Playbook to Deploy Web Server on AWS ",
      link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6703998445486714880",
    },
    {
      id: "8",
      icon: "https://camo.githubusercontent.com/c823b22386c31361d21a4c8e76aa8c7f01b2119a0e4cca6fdcf267001735b94e/687474703a2f2f73696d706c6569636f6e732e6f72672f69636f6e732f616e7369626c652e737667",
      title: "Ancible Docker",
      desc: "Ansible- Playbook to setup web Apache server on Docker",
      link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6702919435042254848",
    },
    {
      id: "9",
      icon: "https://camo.githubusercontent.com/986c248e8a100a55084cfb249ef904dcb0d6992b3ad36cc43455005301a902c9/687474703a2f2f73696d706c6569636f6e732e6f72672f69636f6e732f666c75747465722e737667",
      title: "Flutter Music App",

      desc: "Flutter App Development- Create a basic Music App with Play, Pause, Stop and Forward Buttons",
      link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6699265049401323521",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setcurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setcurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                {/* <img src={d.img} alt="" /> */}
                <iframe
                  src={d.link}
                  height="400"
                  width="530"
                  frameBorder="0"
                  allowFullScreen={true}
                  title="Blog post"
                  // scrolling="no"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="left arrow"
        alt="Left Arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="right arrow"
        alt="Right Arrow"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
