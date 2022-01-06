import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Full Stack Developer",
        "Front-end Developer",
        "Back-end Developer",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/socials-73982.appspot.com/o/images%2Fhari.jpg?alt=media&token=f7eac7bd-2e32-4da3-9a58-fd6343e6c235"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Harikrishna B</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          {/* <img src="assets/down.png" alt="Its me...Hari" /> */}
        </a>
      </div>
    </div>
  );
}
