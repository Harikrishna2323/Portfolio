import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPortfolio } from "../../data";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <>
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              link={item.link}
            />
          </>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <>
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
            <button>
              <a href={d.git} target="_blank" rel="noopener noreferrer">
                Github Repo
              </a>
            </button>
            <button>
              <a href={d.link} target="_blank" rel="noopener noreferrer">
                Open App
              </a>
            </button>
          </>
        ))}
      </div>
    </div>
  );
}
