import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setmessage] = useState(false);
  // const path = [
  //   {
  //     pth: "assets/Contact/chatbot.png",
  //   },
  //   {
  //     pth: "assets/Contact/hiring-people.png",
  //   },
  //   {
  //     pth: "assets/Contact/settings-colored.png",
  //   },
  // ];
  const handleSubmit = (e) => {
    e.preventDefault();
    setmessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/Contact/chatbot.png" alt="" />

        {/* {path.map((p) => {
          return <img src={p.pth} alt="" />;
        })} */}
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="message" />
          <button type="Submit">Send</button>
          {message && <span>Thank you</span>}
        </form>
      </div>
    </div>
  );
}
