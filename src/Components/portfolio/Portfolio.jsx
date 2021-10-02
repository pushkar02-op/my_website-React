import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Hybrid Multi Cloud</li>
        <li>Backend </li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="http://simpleicons.org/icons/mysql.svg" alt="" />
          <h3>React Dashboard</h3>
        </div>
      </div>
    </div>
  );
}
