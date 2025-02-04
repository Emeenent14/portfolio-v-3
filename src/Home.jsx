// import ParticleNew from "./ParticlesNew";

import { useState } from "react";
import Particle from "./Particle";
export default function Home() {
  return (
    <>
      <Particle />
      <div
        className="home flex flex-col items-center justify-center gap-4 h-screen align-center"
        // style={{ margin: "13rem auto 17rem auto" }}
      >
        <p className="name font-medium text-white text-8xl content-center">
          Chukwuemeka <span className="text-sky-500">Franklin</span>
        </p>
        <p className="title text-white text-2xl">
          Full Stack Developer 
        </p>
        <p className="socials text-white text-3xl flex gap-x-6 mt-2">
          <a href="mailto:emeenent14@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope text-white"></i>
          </a>

          <a href="https://www.linkedin.com/in/chukwuemeka-franklin-54a02334b/" target="_blank">
            <i className="fa-brands fa-linkedin text-white"></i>
          </a>

          <a href="https://github.com/Emeenent14" target="_blank">
            <i className="fa-brands fa-github text-white"></i>
          </a>
          <a href="https://x.com/Chukwuemek52371" target="_blank">
              <i className="fa-brands fa-x-twitter socials-icon text-white"></i>
          </a>

          <a href="https://www.telegram.me/+2348189296891/" target="_blank">
              <i className="fa-brands fa-telegram socials-icon text-white"></i>
          </a>
        </p>
      </div>
    </>
  );
}
