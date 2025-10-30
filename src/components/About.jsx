import React from 'react'
import "../App.css";
function About() {
  return (
    <>
    <section className="section about">
                <div className="img-wrapper">
                    <div className="img-box about-img">
                        <img src="images/satish.png" alt=""/>
                    </div>
                </div>
                <div className="about-info">
                    <h2 className="title">About Me</h2>
                    <h3>Full Stack Developer / Freelancer</h3>
                    <p className="desc">
                    Hi, I’m Satish Kumar Meher, a passionate full-stack web developer and third-year B.Tech student at the International Institute of Information Technology, Bhubaneswar. I hail from Padampur, Bargarh, Odisha, and have a strong foundation in programming with over three years of experience.<br/>

Currently, I am a freelancer, specializing in the MERN stack, deliver high quality modern frontend desigining and highly scaled backend architectures. With hands-on experience in developing 10+ full-stack projects, I thrive on solving real-world problems through code. I am also an avid problem solver, tackling daily DSA challenges on LeetCode, and I’m enthusiastic about exploring DevOps and AI/ML technologies.<br/>

Beyond coding, I am a multi-talented musician who enjoys playing the octapad, tabla, and keyboard, as well as singing. In my free time, I love playing cricket, badminton, and BGMI, or spending quality moments with my family and friends. I believe in hard work, being supportive, and always listening and analyzing to improve myself and help others.

Let’s connect and create something impactful together!
                    </p>
                    {/* <a href="#" className="btn">View More</a> */}
                </div>
            </section>
            </>
  )
}

export default About
