import Contact from "./Components/contact/Contact";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Topbar from "./Components/topbar/Topbar";
import Work from "./Components/work/Work";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
