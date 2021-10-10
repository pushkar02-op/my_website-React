import "./topbar.scss";
import { Mail } from "@material-ui/icons";
import Avatar from "@mui/material/Avatar";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import ReactPdf from "../reactPdf/ReactPdf";
import { BiDownload } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const gitHubLink = "https://github.com/pushkar02-op";
  const linkedinLink = "https://www.linkedin.com/in/pushkar-kumar2312/";

  const [modalOpen, setmodalOpen] = useState(false);

  const handleOpen = () => {
    setmodalOpen(true);
  };
  const handleClose = () => {
    setmodalOpen(false);
  };
  const openLink = (link) => {
    window.open(link, "mywindow");
  };
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <Avatar>P</Avatar>
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
            <a href="mailto:pushkarishwar@gmail.com">
              <span>pushkarshwar@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="resume">
            <Button onClick={handleOpen}>
              <h4>Download CV</h4>
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={modalOpen}
              onClose={handleClose}
            >
              <div className="modal">
                <div className="modalheader">
                  <IconContext.Provider value={{ className: "react-icons" }}>
                    <div>
                      <a
                        href="assets/Pushkar kumar (2).pdf"
                        download="Pushkar_Kumar_Resume.pdf"
                      >
                        <BiDownload />
                      </a>
                    </div>
                  </IconContext.Provider>
                  <h3>Resume</h3>
                  <GrClose fontSize="2rem" onClick={handleClose} />
                </div>
                <ReactPdf />
              </div>
            </Modal>
          </div>
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
