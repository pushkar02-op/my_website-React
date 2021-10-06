import "./topbar.scss";
import { Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const gitHubLink = "https://github.com/pushkar02-op";
  const linkedinLink = "https://www.linkedin.com/in/pushkar-kumar2312/";
  const openLink = (link) => {
    window.open(link, "mywindow");
  };
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Logo
          </a>
          <div className="itemContainer">
            <div className="myicon" onClick={() => openLink(gitHubLink)}>
              <img
                src="https://camo.githubusercontent.com/f317680e6ffc726c2008cce14d0170429249493a9f14caaf68f7a2fb9efd5552/687474703a2f2f73696d706c6569636f6e732e6f72672f69636f6e732f6769746875622e737667"
                alt="Github"
              />
            </div>
          </div>
          <div className="itemContainer">
            <div className="myicon" onClick={() => openLink(linkedinLink)}>
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
                alt="linkedin"
              />
            </div>
          </div>
          <div className="itemContainer">
            <Mail className="icon" fontSize="medium" />
            {/* <span>pushkarshwar@gmail.com</span> */}
            <a href="mailto:pushkarishwar@gmail.com">
              <span>pushkarshwar@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
