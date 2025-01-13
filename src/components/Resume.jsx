import React from 'react'
import "../App.css";
function Resume() {
  return (
    <>
     <section className="section resume">
                <h2 className="title">Resume</h2>
                <div className="tab-box">
                    <div className="tab-list resume-list active">
                        <h3>Experience</h3>
                    </div>
                    <div className="tab-list resume-list">
                        <h3>Skills</h3>
                    </div>
                    <div className="tab-list resume-list">
                        <h3>Education</h3>
                    </div>
                </div>
                <div className="tab-wrapper">
                    <div className="tab-grid resume-box experience active">
                        <div className="tab-item resume-item">
                            <h4>2024 - Present</h4>
                            <h4>Fullstack Web Developer</h4>
                            <h4>10+ Project</h4>
                            <p>I have extensive experience, successfully completing 10+ full-stack projects with modern technologies and frameworks</p>
                        </div>
                        <div className="tab-item resume-item">
                            <h4>2024 - 2025</h4>
                            <h4>Backend Lead</h4>
                            <h4>Code-X-Novas</h4>
                            <p>Serving as Backend Lead at Code-X-Novas, driving scalable solutions and leading innovative development projects.</p>
                        </div>
                        {/* <div className="tab-item resume-item">
                            <h4>2020 - 2023</h4>
                            <h4>Devops Engineer</h4>
                            <h4>Netflix Inc.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas, debitis totam recusandae autem modi.</p>
                        </div>
                        <div className="tab-item resume-item">
                            <h4>2018 - 2020</h4>
                            <h4>Software Developer Intern</h4>
                            <h4>Microshoft</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas, debitis totam recusandae autem modi.</p>
                        </div>
                        <div className="tab-item resume-item">
                            <h4>2017 - 2018</h4>
                            <h4>Frontend Developer</h4>
                            <h4>Facbook</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas, debitis totam recusandae autem modi.</p>
                        </div>
                        <div className="tab-item resume-item">
                            <h4>2016 - 2017</h4>
                            <h4>Junior Developer</h4>
                            <h4>Apple Inc.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas, debitis totam recusandae autem modi.</p>
                        </div> */}
                    </div>

                    <div className="tab-grid resume-box skills">
                        <div className="tab-item resume-item">
                            <i className='bx bxl-html5'></i>
                            <p>HTML5</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-css3' ></i>
                            <p>CSS3</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-tailwind-css' ></i>
                            <p>Tailwind</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-javascript' ></i>
                            <p>JavaScript</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-typescript' ></i>
                            <p>TypeScript</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-nodejs' ></i>
                            <p>NodeJS</p>
                        </div>
                        <div className="tab-item resume-item">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
<path fill="#fff" d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"></path><path fill="#fff" d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"></path>
</svg>
                            <p>ExpressJS</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-react' ></i>
                            <p>ReactJS</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-mongodb' ></i>
                            <p>MongoDB</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-postgresql' ></i>
                            <p>PostgreSQL</p>
                        </div>
                        <div className="tab-item resume-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 32 32" id="redis">
                             <path fill="#fff" d="M14.824 7.518c0 .007.103.202.232.441.126.235.219.437.205.447s-.371.146-.792.295c-.424.152-.765.282-.759.288s.487.056 1.067.109c.699.066 1.067.113 1.093.139.023.023.182.282.358.57l.315.53.056-.133c.03-.07.126-.302.215-.51l.156-.381.841-.089c.46-.05.871-.089.914-.089.04-.003.073-.013.073-.03 0-.013-.311-.142-.696-.285-.381-.142-.696-.265-.696-.268s.083-.205.182-.447.175-.447.169-.454c-.007-.01-.331.089-.715.215l-.702.229-.745-.295c-.732-.288-.772-.301-.772-.282zm4.628 2.52c-.891.354-1.623.649-1.63.656s.656.275 1.474.6l1.484.586.159-.063c1.653-.643 3.157-1.242 3.15-1.249-.023-.027-2.948-1.172-2.981-1.172-.023.003-.768.291-1.656.643zm-8.553-.344c-.855.089-1.573.338-1.878.653-.209.215-.242.398-.113.619.192.331.822.61 1.693.752.391.066 1.54.056 1.938-.013.931-.162 1.534-.46 1.676-.835.053-.139.053-.159 0-.295-.139-.364-.732-.666-1.61-.818a8.216 8.216 0 0 0-1.706-.063zm15.92 1.03a2.098 2.098 0 0 1-.354.285c-.451.291-1.034.556-4.651 2.113-2.544 1.093-3.193 1.381-4.074 1.805-.977.467-1.381.596-1.872.596-.441 0-.702-.076-1.524-.441-.328-.146-1.67-.709-2.981-1.255-5.734-2.385-5.84-2.435-6.148-2.766l-.129-.142v2.256l.146.139c.139.136.613.421.782.47.046.013.358.142.696.288s1.984.835 3.66 1.534c2.773 1.156 3.405 1.421 4.349 1.835.5.222.778.278 1.249.262.345-.013.447-.033.749-.136a7.34 7.34 0 0 0 .752-.318c.719-.361 1.59-.745 5.058-2.239 3.263-1.408 3.687-1.603 4.041-1.848.364-.258.348-.195.348-1.451 0-.6-.003-1.09-.01-1.09s-.043.046-.086.103zm-11.422 1.471c-1.335.205-2.441.381-2.461.388-.03.01 3.326 1.421 3.468 1.457.033.01 1.534-2.15 1.534-2.206 0-.03.003-.033-2.541.361zm11.441 2.233c-.03.05-.169.172-.305.268-.434.298-1.086.596-5.052 2.302-2.282.984-2.998 1.299-3.677 1.63-1.1.533-1.365.619-1.954.616-.457-.003-.739-.076-1.345-.351-.583-.268-1.236-.543-3.856-1.63-4.558-1.891-5.085-2.127-5.406-2.438l-.159-.149v2.219l.179.169c.292.272.262.258 5.154 2.296 1.795.745 3.488 1.457 3.76 1.58.722.325.931.401 1.216.46.666.136 1.159.026 2.239-.5.702-.341 1.56-.722 3.637-1.616 3.948-1.703 4.922-2.14 5.21-2.332.103-.073.242-.189.311-.265l.123-.136v-1.11c0-.61-.003-1.11-.01-1.11a.724.724 0 0 0-.066.096zm-.036 3.633c-.262.328-.785.58-4.856 2.332-2.657 1.146-3.465 1.504-4.339 1.921-.918.437-1.219.53-1.749.53-.361 0-.729-.086-1.136-.265-.951-.417-1.577-.682-4.353-1.838-3.157-1.315-4.167-1.742-4.505-1.911-.315-.159-.636-.384-.709-.5l-.07-.106v1.13c0 1.295-.023 1.199.325 1.434.384.258.954.51 4.744 2.083 2.65 1.1 3.604 1.501 4.074 1.713.961.431 1.216.5 1.752.47.49-.023.812-.129 1.66-.533.884-.424 1.537-.715 4.422-1.958 4.008-1.726 4.442-1.934 4.747-2.286l.106-.119v-1.106c0-.61-.003-1.11-.007-1.11a.764.764 0 0 0-.106.119z"></path>
                        </svg>
                            <p>Redis</p>
                        </div>
                        <div className="tab-item resume-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-30 -50 200 200"><path d="M86.758 70.89c-4.992 0-9.465 2.208-12.528 5.68l-7.851-5.547a21.275 21.275 0 001.312-7.32c0-2.531-.46-4.95-1.27-7.203l7.837-5.488c3.062 3.457 7.523 5.652 12.5 5.652 9.207 0 16.703-7.48 16.703-16.672 0-9.195-7.496-16.672-16.703-16.672-9.211 0-16.707 7.477-16.707 16.672 0 1.645.25 3.23.699 4.735l-7.84 5.488a21.578 21.578 0 00-13.36-7.746v-9.43c7.567-1.586 13.27-8.293 13.27-16.312C62.82 7.53 55.324.055 46.117.055c-9.21 0-16.707 7.476-16.707 16.672 0 7.91 5.555 14.539 12.969 16.238v9.547c-10.117 1.773-17.84 10.59-17.84 21.191 0 10.652 7.797 19.5 17.992 21.211V95c-7.492 1.64-13.12 8.309-13.12 16.273 0 9.196 7.495 16.672 16.706 16.672 9.207 0 16.703-7.476 16.703-16.672 0-7.964-5.629-14.632-13.117-16.273V84.914a21.592 21.592 0 0013.133-7.625l7.902 5.586a16.45 16.45 0 00-.687 4.688c0 9.195 7.496 16.671 16.707 16.671 9.207 0 16.703-7.476 16.703-16.671 0-9.196-7.496-16.672-16.703-16.672zm0-38.984c4.465 0 8.097 3.63 8.097 8.086 0 4.453-3.632 8.082-8.097 8.082-4.469 0-8.102-3.629-8.102-8.082 0-4.457 3.633-8.086 8.102-8.086zm-48.742-15.18c0-4.456 3.632-8.081 8.101-8.081 4.465 0 8.098 3.625 8.098 8.082 0 4.457-3.633 8.082-8.098 8.082-4.469 0-8.101-3.625-8.101-8.082zm16.199 94.547c0 4.457-3.633 8.082-8.098 8.082-4.469 0-8.101-3.625-8.101-8.082 0-4.457 3.632-8.082 8.101-8.082 4.465 0 8.098 3.625 8.098 8.082zm-8.102-36.296c-6.226 0-11.293-5.059-11.293-11.274 0-6.219 5.067-11.277 11.293-11.277 6.23 0 11.297 5.058 11.297 11.277 0 6.215-5.066 11.274-11.297 11.274zm40.645 20.668c-4.469 0-8.102-3.625-8.102-8.082 0-4.458 3.633-8.083 8.102-8.083 4.465 0 8.097 3.625 8.097 8.082 0 4.458-3.632 8.083-8.097 8.083zm0 0" fill="#fff"/></svg>

                            <p>Kafka</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-firebase' ></i>
                            <p>Firebase</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-docker' ></i>
                            <p>Docker</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-git' ></i>
                            <p>Git</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-kubernetes' ></i>
                            <p>Kubernetes</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-aws' ></i>
                            <p>AWS</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-c-plus-plus' ></i>
                            <p>C/C++</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-python' ></i>
                            <p>Python</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-figma' ></i>
                            <p>Figma</p>
                        </div>
                    </div>
                    <div className="tab-grid resume-box education">
                    <div className="tab-item resume-item">
                            <h4>2023 - 2024</h4>
                            <h4>Frontend / ReactJS</h4>
                            <h4>Thapa Technical</h4>
                            <p>Completed Frontend Development course at Thapa Technical, mastering CSS, Tailwind CSS, ReactJS, and Redux Toolkit.</p>
                        </div>
                        <div className="tab-item resume-item">
                            <h4>2023 - 2024</h4>
                            <h4>Backend / NodeJS</h4>
                            <h4>Piyush Garg Dev</h4>
                            <p>I completed a backend course on Node.js, Express.js, and MongoDB by Piyush Garg, gaining skills to efficiently build RESTful APIs</p>
                        </div>
                        <div className="tab-item resume-item">
                            <h4>2023 - 2024</h4>
                            <h4>Microservices | Scalability</h4>
                            <h4>TrainWithShubham</h4>
                            <p>I learned microservices, AWS, Docker, Kubernetes, CI/CD, and scalability with Redis, Kafka, and Nginx, enhancing my ability to build scalable apps.</p>
                        </div>
                        <div className="tab-item resume-item">
                            <h4>2023 - 2027</h4>
                            <h4>Computer Engineering , B.Tech</h4>
                            <h4>IIIT Bhubaneswar</h4>
                            <p>Currently pursuing a Bachelor’s degree in Computer Engineering, 2nd year, at IIIT Bhubaneswar.</p>
                        </div>
                        
                        <div className="tab-item resume-item">
                            <h4>2020-2022</h4>
                            <h4>Senior Higher Secondary</h4>
                            <h4>S.V.M, Cuttak, Odisha</h4>
                            <p>
                            I completed my 11th and 12th grade from S.V.M. Cuttack in 2022 with a 92%, building a strong academic foundation for my computer engineering studies.
                            </p>
                        </div>
                        <div className="tab-item resume-item">
                            <h4>2020</h4>
                            <h4>Matriculation</h4>
                            <h4>S.S.V.M, Padampur, Bargarh, Odisha</h4>
                            <p>I completed my 10th grade from S.S.V.M. Padampur, Bargarh, with an 84% score, where I built a solid academic foundation that laid the groundwork for my future educational pursuits.</p>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Resume
