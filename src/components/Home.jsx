import React from 'react'
import "../App.css";
function Home() {
  return (
    <>
     {/* <!-- home section --> */}
     <section className="section home active">
                <div className="home-info">
                    <h3>Hello I'm</h3>
                    <h1>Satish Kumar Meher</h1>
                    <h3>Full Stack Developer</h3>
                    <p className="desc">
                    MERN STACK || API developer || UI/UX || DevOps || Microservices || IIIT-BH || CE 27'
                    </p>
                    <div className="btn-sci">
                        <a href="#" className="btn">Download CV</a>
                        <div className="sci"> 
                            <a href="https://github.com/Satish-kumar-Meher">
                                <i className='bx bxl-github' ></i>
                                <span className="tooltip">Github</span>
                            </a>
                            <a href="https://www.linkedin.com/in/satish-kumar-meher-5356a0281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <i className='bx bxl-linkedin' ></i>
                                <span className="tooltip">Linkedin</span>
                            </a>
                            <a href="https://x.com/SatishKuma64742?s=09">
                                <i className='bx bxl-twitter' ></i>
                                <span className="tooltip">Twitter</span>
                            </a>
                            <a href="https://www.instagram.com/satishh.js?igsh=amo5a3ZuejdtdjVy">
                                <i className='bx bxl-instagram' ></i>
                                <span className="tooltip">Instagram</span>
                            </a>
                            <a href="https://youtu.be/8MbaNmrfE5I?si=krFCqe8crHfF82IB">
                                <i className='bx bxl-youtube' ></i>
                                <span className="tooltip">Youtube</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <div className="img-box home-img">
                        <img src="images/satish.png" alt=""/>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Home
