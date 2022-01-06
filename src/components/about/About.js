import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://cdn.w600.comps.canstockphoto.com/about-me-paint-on-post-it-drawing_csp45461590.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hello! I'm Harikrishna B, a passionate web developer, from Kerala,
          also known as God's own Country.
        </p>
        <p className="a-desc">
          I am a creative, time punctual, dedicated, goal-oriented individual
          with decent moral Values and Ethicates along with a high-energy level,
          honed communication skills, strong organizational skills, and
          meticulous attention to detail.
        </p>
        <p className="a-desc">
          I have graduated with a bachelor's degree in Mechanical Engineering
          from College of Engineering, Trivandrum at Kerala, India in 2020.
        </p>
        <p className="a-desc">
          I am available for any kind of job opportunity that suits my
          interests.
        </p>
      </div>
    </div>
  );
};

export default About;
