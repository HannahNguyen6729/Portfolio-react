import React from 'react'

export default function Footer() {
  return (
<>
<footer className="bg-info text-center text-white mt-5">
    
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Github */}
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#333333'}} href="https://github.com/HannahNguyen6729" target="_blank" rel='noopener noreferrer' role="button"><i className="fab fa-github" /></a>
       {/* Linkedin */}
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="https://www.linkedin.com/in/hanh-nguyen-0a47b6185/" target="_blank" rel='noopener noreferrer' role="button"><i className="fab fa-linkedin-in" /></a>
       {/* Facebook */}
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="https://www.facebook.com/myhanh.stie/" target="_blank" rel='noopener noreferrer' role="button"><i className="fab fa-facebook-f" /></a>
      {/* Instagram */}
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="https://www.instagram.com/myhanh.ip/" target="_blank" rel='noopener noreferrer' role="button"><i className="fab fa-instagram" /></a>
       {/* Twitter */}
       {/* <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#55acee'}} href="#!" role="button"><i className="fab fa-twitter" /></a> */}
      {/* Google */}
      {/* <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"><i className="fab fa-google" /></a> */}
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    Created By <strong>Hannah</strong>  Nguyen | © 2022 All rights reserved.
  </div>
  {/* Copyright */}
</footer>
</>
  )
}

