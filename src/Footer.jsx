export default function Footer() {
  return (
    <div>
      <div
        className="footer bg-slate-900 py-5 mx-auto"
        style={{ zIndex: 100, position: "relative" }}
      >
        <p className="footer-tagline text-white font-medium text-center">
          Connect with me
        </p>

        <div className="flex space-around justify-between items-center mx-20">
                <ul className="socials-container flex gap-x-4 justify-center my-3">
                  <li>
                    <a href="mailto:emeenent14@gmail.com" target="_blank">
                      <i className="fa-solid fa-envelope socials-icon text-white"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Emeenent14" target="_blank">
                      <i className="fa-brands fa-github socials-icon  text-white"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/chukwuemeka-franklin-54a02334b/" target="_blank">
                      <i className="fa-brands fa-linkedin socials-icon  text-white"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://x.com/Chukwuemek52371" target="_blank">
                      <i className="fa-brands fa-x-twitter socials-icon text-white"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.telegram.me/+2348189296891/" target="_blank">
                    <i className="fa-brands fa-telegram socials-icon text-white"></i>
                    </a>
                  </li>
                </ul>

                <div className="nav-links flex font-medium text-white justify-around gap-4">
                  <a href="#" className="home font-light text-sm">
                    Home
                  </a>
                  <a href="#about-section" className="about font-light text-sm">
                    About
                  </a>
                  <a href="#skill-container" className="skill font-light text-sm">
                    Skills
                  </a>
                  <a href="#workex-container" className="workex font-light text-sm">
                    Work Exp
                  </a>
                  <a href="#projects-container" className="project font-light text-sm">
                    Projects
                  </a>
                  <a
                    href="https://sleekcode-r.blogspot.com/"
                    target="_blank"
                    className="certification font-light text-sm"
                  >
                    Blogs
                  </a>
                </div>
          </div>

        <hr className="horizontal-line"></hr>
        <p className="copyright text-gray-400 text-center text-xs mt-4 mb-2">
          Copyright &copy;2024 Chukwuemeka Franklin
        </p>
      </div>
    </div>
  );
}
