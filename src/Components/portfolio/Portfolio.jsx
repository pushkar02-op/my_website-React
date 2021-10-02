import "./portfolio.scss";
import { useEffect, useState } from "react";
import PortfolioList from "./portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
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
        setdata(designPortfolio);
        break;

      case "Backend":
        setdata(contentPortfolio);
        break;

      default:
        setdata(designPortfolio);
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
      title: "Hybrid Multi Cloud",
    },
    {
      id: "Backend",
      title: "Backend",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setselected={setselected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
