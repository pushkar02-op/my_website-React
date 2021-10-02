import "./portfolioList.scss";

export default function PortfolioList({ title, active, setselected, id }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setselected(id)}
    >
      {title}
    </li>
  );
}
