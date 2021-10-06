import { useState } from "react";
import "./work.scss";
import { data } from "../../data";
import { useSwipeable } from "react-swipeable";

export default function Work() {
  const [currentSlide, setcurrentSlide] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleClick("right"),
    onSwipedRight: () => handleClick("left"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleClick = (way) => {
    way === "left"
      ? setcurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setcurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  const openLink = (source) => {
    window.open(source, "mywindow");
  };
  return (
    <div className="work" id="work">
      <div
        {...handlers}
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
                  <button>
                    <span onClick={() => openLink(d.source)}>Read Blog</span>
                  </button>
                </div>
              </div>
              <div className="right">
                <img src={d.link} alt="" />
                {/* <iframe
                  src={d.link}
                  height="400"
                  width="530"
                  frameBorder="0"
                  allowFullScreen={true}
                  title="Blog post"
                  scrolling="no"
                ></iframe> */}
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
