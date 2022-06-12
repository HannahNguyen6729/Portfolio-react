import React from "react";
import { useState , useEffect} from "react";
import "./BackToTop.css";

export default function BackToTop() {
  let [isShown, setShow] = useState(false);
 useEffect(() => {
   // When the user scrolls down 200px from the top of the document, show the button
   const handleScroll = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ){
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return ()=>{
    window.removeEventListener('scroll', handleScroll)
  }
 },[])
  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      <button
        onClick={backToTop}
        style={{ display: isShown ? "block" : "none" }}
        type="button"
        className="btn btn-info btn-floating btn-md"
        id="btn-back-to-top"
      >
        <i className="fas fa-arrow-up" />
      </button>
    </div>
  );
}
