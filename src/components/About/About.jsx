import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function About() {
  const { story, intro } = useSelector(
    (state) => state.PortfolioReducer.portfolio
  );
  return (
    <div className="container pt-5" id='about'>
      <div className="row">
        <motion.div
          className="col-lg-8"
          whileInView={{ x: [-300, 0],opacity:[0,1] }}
          transition={{ ease: "easeIn", duration: 1.5}}
        >
          <p className='display-6 pt-2'>My story</p>
          <p className="note note-info">
            <strong>Hannah's journey:</strong> {story}
          </p>
          <div className="d-flex note note-light">
            <img
              src="../images/naruto.png"
              alt="team"
              style={{ height: 200 }}
            />
            <p className=" fst-italic fw-light ">
              <strong>A little bit about me:</strong> {intro}
            </p>
          </div>
        </motion.div>
        <div className="col-lg-4 text-center my-auto pt-3">
          <div className="card bg-dark ">
            <img
              src="../images/cherryblossom.jpg"
              className="card-img"
              alt="cherry blossom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
