import React from "react";
import Sd_pro from '../images/Sd_pro.jpg'

export default function About() {
    return(
        <div>
            <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={Sd_pro} className="d-block mx-lg-auto img-fluid" id="profile" alt="Sujit Dhotre" width="700" height="500" loading="fast"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Hi, I am Sujit Dhotre</h1>
        <p className="lead">Hello there! I'm Sujit Dhotre, a dedicated and detail-oriented software developer with one year of hands-on experience in crafting robust and efficient solutions. I am driven by a passion for turning innovative ideas into reality through the art and science of coding.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center" align="center">
          <a type="button" className="btn btn-warning btn-lg px-4 me-md-2" href="mailto:sujitdhotre5000@gmail.com?subject=From the Text Utility project">Contact Me</a>
        </div>
      </div>
    </div>
  </div>
  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        </div>
    )
    
}