import "./portfolio.scss";
import { useEffect, useState } from "react";
import PortfolioList from "./portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  cloudPortfolio,
  devopsPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setselected] = useState("featured");
  const [data, setdata] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setdata(featuredPortfolio);
        break;

      case "mobile":
        setdata(mobilePortfolio);
        break;

      case "web":
        setdata(webPortfolio);
        break;

      case "Cloud":
        setdata(cloudPortfolio);
        break;

      case "Devops":
        setdata(devopsPortfolio);
        break;

      default:
        setdata(featuredPortfolio);
    }
  }, [selected]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "Cloud",
      title: "Cloud",
    },
    {
      id: "Devops",
      title: "Devops",
    },
  ];
  const openLink = (link) => {
    window.open(link, "mywindow");
  };
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setselected={setselected}
            id={item.id}
            key={index}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, index) => (
          <div key={index} className="item" onClick={() => openLink(d.link)}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
