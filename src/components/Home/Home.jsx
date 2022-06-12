import React from "react";
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import "./Home.css";

export default function Home() {
  return (
    <div
      className="container-fluid home p-0"
      style={{ height: window.innerHeight }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", height: "100%" }}
      >
        <div className="text-white text-center">
          <p className="display-2" >My name is Hannah</p>
          <p className="display-6">And I'm a {''}
          <span style={{ color: '#16b5ea', fontWeight: 'bold' }}>
          <Typewriter
            words={['Developer', 'Programmer', 'Manga/Anime Lover!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={80}
            delaySpeed={1000}
          />
          </span>
          </p>
        </div>
      </div>
    </div>
  );
}
