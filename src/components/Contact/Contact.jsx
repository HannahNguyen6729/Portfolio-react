import React from "react";
import {useSelector} from "react-redux";
import "./Contact.css";

export default function Contact() {
  let {name, address, email, phone, github} = useSelector(state => state.PortfolioReducer.portfolio.infor)
  return (
    <div className="container pt-5" id='contact'>
      <div className="row">
        <div className="col-lg-6">
          <p className='display-6 pt-2'>Get in touch</p>
          <p className="pe-5 pt-2">
            If you would like to contact me. Please, feel free to send me a
            message via my email which is provided below, you can also message
            me via social media by clicking icons located on the footer. It's my
            honor to have a conversation with you.
          </p>
          <p>
            <i className="fa fa-user me-4 text-info"></i>
            {name}
          </p>
          <p>
            <i className="fa fa-map-marked me-4 text-info"></i>
            {address}
          </p>
          <p>
            <i className="fa fa-envelope me-4 text-info"></i>
            {email}
          </p>
          <p>
            <i className="fa fa-phone me-4 text-info"></i>
            {phone}
          </p>
          <p>
            <i className="fab fa-github me-4 text-info"></i>
           <a href={github} className="text-info"> {github}</a>
          </p>
        </div>
        <div className="col-lg-6">
          <p className='display-6 pt-2'>Message me</p>
          <form className="pt-3">
            {/* Name input */}
            <div className="form-outline mb-4">
              <input type="text" id="form4Example1" className="form-control" />
              <label className="form-label" htmlFor="form4Example1">
                Name
              </label>
            </div>
            {/* Email input */}
            <div className="form-outline mb-4">
              <input type="email" id="form4Example2" className="form-control" />
              <label className="form-label" htmlFor="form4Example2">
                Email address
              </label>
            </div>
            {/* Message input */}
            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                id="form4Example3"
                rows={4}
                defaultValue={""}
              />
              <label className="form-label" htmlFor="form4Example3">
                Message
              </label>
            </div>
            {/* Checkbox */}
            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2 bg-info border-info"
                type="checkbox"
                defaultValue
                id="form4Example4"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="form4Example4">
                Send me a copy of this message
              </label>
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-info btn-block mb-4">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
