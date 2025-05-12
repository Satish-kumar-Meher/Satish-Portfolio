import React from 'react'
import "../App.css";
function Portfolio() {
  return (
   <>
   <section className="section portfolio">
        <h2 className="title">Portfolio</h2>
        <div className="tab-box">
            <div className="tab-list portfolio-list active">
                <h3>My Work</h3>
            </div>
            <div className="tab-list portfolio-list">
                <h3>My Service</h3>
            </div>
        </div>
        <div className="tab-wrapper">
            <div className="tab-grid portfolio-box work active">



            <div className="tab-item portfolio-item">
                   <div className="work-img">
                    <img src="images/car_rental.png" alt=""/>
                </div>
                <div className="work-info">
                    <h4>TripNGo</h4>
                    <p>A Vehicle rental webiste, which is for both the vendour and trveller.</p>
                    <div className="tech-used">
                        <p>Tailwind css , ReactJS , NodeJS , MongoDB</p>
                    </div>
                    <div className="portfolio-icon work-icon">
                        <a href="https://trip-n-go.vercel.app/">
                            <i className='bx bx-arrow-back' ></i>
                            <span className="tooltip">Preview</span>
                        </a>
                        <a href="https://github.com/Satish-kumar-Meher/Trip-n-Go">
                            <i className='bx bxl-github' ></i>
                            <span className="tooltip">Github Repo</span>
                        </a>
                    </div>
                </div>
                </div>


                <div className="tab-item portfolio-item">
                   <div className="work-img">
                    <img src="images/tripma.png" alt=""/>
                </div>
                <div className="work-info">
                    <h4>Tripma</h4>
                    <p>A Flight booking WebApp,where Razorpay and Gemini integrated.</p>
                    <div className="tech-used">
                        <p>TailwindCSS , ReactJS , Firebase</p>
                    </div>
                    <div className="portfolio-icon work-icon">
                        <a href="https://tripma-gamma.vercel.app/">
                            <i className='bx bx-arrow-back' ></i>
                            <span className="tooltip">Preview</span>
                        </a>
                        <a href="https://github.com/Satish-kumar-Meher/Tripma">
                            <i className='bx bxl-github' ></i>
                            <span className="tooltip">Github Repo</span>
                        </a>
                    </div>
                </div>
                </div>


                <div className="tab-item portfolio-item">
                   <div className="work-img">
                    <img src="images/cxn.png" alt=""/>
                </div>
                <div className="work-info">
                    <h4>Registration website</h4>
                    <p>A registration webiste of Code-X-Novas.</p>
                    <div className="tech-used">
                        <p>HTML5 , CSS3 , ReactJS , Firebase</p>
                    </div>
                    <div className="portfolio-icon work-icon">
                        <a href="https://code-x-novas-registration.vercel.app/">
                            <i className='bx bx-arrow-back' ></i>
                            <span className="tooltip">Preview</span>
                        </a>
                        <a href="https://github.com/Satish-kumar-Meher/Code-X-Novas-Registration-Website">
                            <i className='bx bxl-github' ></i>
                            <span className="tooltip">Github Repo</span>
                        </a>
                    </div>
                </div>
                </div>


                <div className="tab-item portfolio-item">
                    <div className="work-img">
                     <img src="images/e-bharat.png" alt=""/>
                 </div>
                 <div className="work-info">
                     <h4>E-Bharat</h4>
                     <p>An E-commerce website , with both user and admin dashboard and implmented razorpay payment gateway.</p>
                     <div className="tech-used">
                         <p>React.JS , Firebase</p>
                     </div>
                     <div className="portfolio-icon work-icon">
                         <a href="https://e-commerce-liart-eta-32.vercel.app/">
                             <i className='bx bx-arrow-back' ></i>
                             <span className="tooltip">Preview</span>
                         </a>
                         <a href="https://github.com/Satish-kumar-Meher/E-Commerce">
                             <i className='bx bxl-github' ></i>
                             <span className="tooltip">Github Repo</span>
                         </a>
                     </div>
                 </div>
                 </div>

                 <div className="tab-item portfolio-item">
                    <div className="work-img">
                     <img src="images/e-kheti.png" alt=""/>
                 </div>
                 <div className="work-info">
                     <h4>E-Kheti</h4>
                     <p> An allrounder farming WebApp for farmers Using MERNSTACK.</p>
                     <div className="tech-used">
                         <p>ReactJS , NodeJS , MongoDB , Redux</p>
                     </div>
                     <div className="portfolio-icon work-icon">
                         <a href="">
                             <i className='bx bx-arrow-back' ></i>
                             <span className="tooltip">Preview</span>
                         </a>
                         <a href="https://github.com/Satish-kumar-Meher/E-KHETI">
                             <i className='bx bxl-github' ></i>
                             <span className="tooltip">Github Repo</span>
                         </a>
                     </div>
                 </div>
                 </div>

                 <div className="tab-item portfolio-item">
                    <div className="work-img">
                     <img src="images/educational.png" alt=""/>
                 </div>
                 <div className="work-info">
                     <h4>Education Platform</h4>
                     <p>An e-learning platform where different different courses sell</p>
                     <div className="tech-used">
                         <p>ReactJS , NodeJS , MongoDB , Redux</p>
                     </div>
                     <div className="portfolio-icon work-icon">
                         <a href="">
                             <i className='bx bx-arrow-back' ></i>
                             <span className="tooltip">Preview</span>
                         </a>
                         <a href="https://github.com/Satish-kumar-Meher/Education-website">
                             <i className='bx bxl-github' ></i>
                             <span className="tooltip">Github Repo</span>
                         </a>
                     </div>
                 </div>
                 </div>

                 <div className="tab-item portfolio-item">
                    <div className="work-img">
                     <img src="images/instagram.png" alt=""/>
                 </div>
                 <div className="work-info">
                     <h4>Instagram Clone</h4>
                     <p>A clone of instagram, implented real time chat and notification system.</p>
                     <div className="tech-used">
                         <p>ReactJS , NodeJS , MongoDB , Redux , Socket.io</p>
                     </div>
                     <div className="portfolio-icon work-icon">
                         <a href="">
                             <i className='bx bx-arrow-back' ></i>
                             <span className="tooltip">Preview</span>
                         </a>
                         <a href="https://github.com/Satish-kumar-Meher/Instagram-Clone">
                             <i className='bx bxl-github' ></i>
                             <span className="tooltip">Github Repo</span>
                         </a>
                     </div>
                 </div>
                 </div>


                 <div className="tab-item portfolio-item">
                    <div className="work-img">
                     <img src="images/portfolio.png" alt=""/>
                 </div>
                 <div className="work-info">
                     <h4>My Portfolio</h4>
                     <p>My portfolio website , where i use advanced css styles, and show my all details</p>
                     <div className="tech-used">
                         <p>HTML , CSS , ReactJS</p>
                     </div>
                     <div className="portfolio-icon work-icon">
                         <a href="">
                             <i className='bx bx-arrow-back' ></i>
                             <span className="tooltip">Preview</span>
                         </a>
                         <a href="https://github.com/Satish-kumar-Meher/Satish-Portfolio">
                             <i className='bx bxl-github' ></i>
                             <span className="tooltip">Github Repo</span>
                         </a>
                     </div>
                 </div>
                 </div>


            </div>
            
            <div className="tab-grid portfolio-box service">
                <div className="tab-item portfolio-item">
                   <div className="portfolio-icon service-icon">
                    <i className='bx bx-code-alt icon' ></i>
                    <a href=""><i className='bx bx-arrow-back' ></i></a>
                   </div> 
                   <h4>Front-End Web Development</h4>
                    <p>Responsive Web Design , Custom UI/UX Development , Single-Page Applications (SPAs) , Website Redesign</p>
                </div>

                <div className="tab-item portfolio-item">
                    <div className="portfolio-icon service-icon">
                    <i class='bx bx-code-curly icon'></i>
                     <a href=""><i className='bx bx-arrow-back' ></i></a>
                    </div> 
                    <h4>Back-End Development</h4>
                     <p>API Development and Integration , Authentication and Authorization , Real-Time Applications , Database Design and Management</p>
                 </div>

                 <div className="tab-item portfolio-item">
                    <div className="portfolio-icon service-icon">
                    <i className='bx bx-server icon' ></i>
                     <a href=""><i className='bx bx-arrow-back' ></i></a>
                    </div> 
                    <h4>DevOps Service</h4>
                    <p>I provide AWS deployment with CI/CD pipelines for efficient, automated builds and redeployment, ensuring scalability and minimal downtime.</p>

                 </div>
    
                 {/* <div className="tab-item portfolio-item">
                    <div className="portfolio-icon service-icon">
                        <i className='bx bx-server icon' ></i>
                     <a href=""><i className='bx bx-arrow-back' ></i></a>
                    </div> 
                    <h4>Microservices</h4>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat.</p>
                 </div> */}
    
                 {/* <div className="tab-item portfolio-item">
                    <div className="portfolio-icon service-icon">
                        <i className='bx bx-slideshow icon' ></i>
                     <a href=""><i className='bx bx-arrow-back' ></i></a>
                    </div> 
                    <h4>Video Editing</h4>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat.</p>
                 </div> */}


            </div>
        </div>
     </section>
   </>
  )
}

export default Portfolio
