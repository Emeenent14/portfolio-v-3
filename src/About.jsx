import profileImg from "./assets/IMG_20240901_121116543~4.jpg";
export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="about-section-container flex gap-5 justify-between py-20 bg-slate-900"
        style={{ zIndex: 100, position: "relative" }}
      >
        <div className="text-start">
          <p
            className="greetings text-white font-bold text-3xl"
            style={{ margin: "1rem 5rem" }}
          >
            Hi, I'm Chukwuemeka Franklin <span className="wave">👋🏻</span>
          </p>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            I'm a <span className="text-sky-500">passionate Frontend Developer</span> who believes in creating more than just code—I craft 
            <span className="text-sky-500"> immersive digital experiences</span> that captivate and inspire. With a strong foundation in 
            <span className="text-sky-500"> React, JavaScript, and CSS</span>, I specialize in building 
            <span className="text-sky-500"> dynamic, user-centered websites</span> that not only function flawlessly but also tell a story. My 
            <span className="text-sky-500"> full-stack development experience</span> has honed my ability to deliver 
            <span className="text-sky-500"> seamless, interactive solutions</span> that bridge the gap between design and functionality.
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Every project I undertake is a <span className="text-sky-500">labor of love</span>. Whether it's designing 
            <span className="text-sky-500"> data-driven interfaces</span> that adapt to user needs or leveraging 
            <span className="text-sky-500"> Tailwind CSS</span> to create <span className="text-sky-500">stunning, responsive designs</span>, 
            I pour my <span className="text-sky-500">creativity and attention to detail</span> into every line of code. 
            For me, <span className="text-sky-500">web development</span> is about 
            <span className="text-sky-500"> forging meaningful connections</span>—transforming ideas into 
            <span className="text-sky-500"> intuitive, impactful experiences</span> that leave a 
            <span className="text-sky-500"> lasting impression</span>.
          </p>
        </div>
        <img
          src={profileImg}
          alt="saumya-gupta-img"
          className="text-white img-saumya"
          style={{
            margin: "0rem 5rem 1rem 1rem",
            borderRadius: "50%",
            width: "90%",
            height: "20rem",
            position: "relative",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}