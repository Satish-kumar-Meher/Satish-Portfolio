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
                            <i className='bx bxl-javascript' ></i>
                            <p>JavaScript</p>
                        </div>
                        <div className="tab-item resume-item">
                            <i className='bx bxl-typescript' ></i>
                            <p>TypeScript</p>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 128 128"><path fill="#fff" d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z" /></svg>
                            <p>MySQL</p>
                        </div>
                        <div className="tab-item resume-item">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="65" height="65" viewBox="0 0 50 50">
                                <path fill="#fff" d="M44.674,37.568L27.405,1.49c-0.89-1.859-3.473-2.012-4.575-0.271L3.679,31.461c-0.413,0.652-0.401,1.486,0.03,2.126	l9.647,14.323c0.599,0.889,1.7,1.29,2.729,0.994l26.994-7.775C44.596,40.692,45.357,38.994,44.674,37.568z M40.86,38.865	l-22.703,6.369c-0.526,0.148-1.02-0.318-0.906-0.853L25.3,6.749c0.145-0.678,1.064-0.788,1.364-0.163l14.843,30.881	C41.766,38.033,41.459,38.697,40.86,38.865z"></path>
                            </svg>
                            <p>Prisma ORM</p>
                        </div>

                        <div className="tab-item resume-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="65" height="65"><g fill="#fff" fill-rule="evenodd"><path d="M63.951.001C28.696.001.001 28.696.001 63.951s28.695 63.95 63.95 63.95 63.95-28.695 63.95-63.95S99.206.001 63.95.001zm0 10.679c29.484 0 53.272 23.787 53.272 53.271 0 29.485-23.788 53.272-53.272 53.272-29.484 0-53.272-23.787-53.272-53.272 0-29.484 23.788-53.271 53.272-53.271z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" fill-rule="nonzero" /><path d="M48.39 60.716c14.004-11.44 27.702-23.278 42.011-34.384-7.505 11.533-15.224 22.913-22.729 34.445-6.437.03-12.875.03-19.282-.061zM60.228 67.092c6.468 0 12.905 0 19.342.092-14.095 11.38-27.732 23.309-42.071 34.384 7.505-11.533 15.224-22.943 22.729-34.476z" /></g></svg>

                            <p>Socket.io</p>
                        </div>

                        <div className="tab-item resume-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 32 32" id="redis">
                                <path fill="#fff" d="M14.824 7.518c0 .007.103.202.232.441.126.235.219.437.205.447s-.371.146-.792.295c-.424.152-.765.282-.759.288s.487.056 1.067.109c.699.066 1.067.113 1.093.139.023.023.182.282.358.57l.315.53.056-.133c.03-.07.126-.302.215-.51l.156-.381.841-.089c.46-.05.871-.089.914-.089.04-.003.073-.013.073-.03 0-.013-.311-.142-.696-.285-.381-.142-.696-.265-.696-.268s.083-.205.182-.447.175-.447.169-.454c-.007-.01-.331.089-.715.215l-.702.229-.745-.295c-.732-.288-.772-.301-.772-.282zm4.628 2.52c-.891.354-1.623.649-1.63.656s.656.275 1.474.6l1.484.586.159-.063c1.653-.643 3.157-1.242 3.15-1.249-.023-.027-2.948-1.172-2.981-1.172-.023.003-.768.291-1.656.643zm-8.553-.344c-.855.089-1.573.338-1.878.653-.209.215-.242.398-.113.619.192.331.822.61 1.693.752.391.066 1.54.056 1.938-.013.931-.162 1.534-.46 1.676-.835.053-.139.053-.159 0-.295-.139-.364-.732-.666-1.61-.818a8.216 8.216 0 0 0-1.706-.063zm15.92 1.03a2.098 2.098 0 0 1-.354.285c-.451.291-1.034.556-4.651 2.113-2.544 1.093-3.193 1.381-4.074 1.805-.977.467-1.381.596-1.872.596-.441 0-.702-.076-1.524-.441-.328-.146-1.67-.709-2.981-1.255-5.734-2.385-5.84-2.435-6.148-2.766l-.129-.142v2.256l.146.139c.139.136.613.421.782.47.046.013.358.142.696.288s1.984.835 3.66 1.534c2.773 1.156 3.405 1.421 4.349 1.835.5.222.778.278 1.249.262.345-.013.447-.033.749-.136a7.34 7.34 0 0 0 .752-.318c.719-.361 1.59-.745 5.058-2.239 3.263-1.408 3.687-1.603 4.041-1.848.364-.258.348-.195.348-1.451 0-.6-.003-1.09-.01-1.09s-.043.046-.086.103zm-11.422 1.471c-1.335.205-2.441.381-2.461.388-.03.01 3.326 1.421 3.468 1.457.033.01 1.534-2.15 1.534-2.206 0-.03.003-.033-2.541.361zm11.441 2.233c-.03.05-.169.172-.305.268-.434.298-1.086.596-5.052 2.302-2.282.984-2.998 1.299-3.677 1.63-1.1.533-1.365.619-1.954.616-.457-.003-.739-.076-1.345-.351-.583-.268-1.236-.543-3.856-1.63-4.558-1.891-5.085-2.127-5.406-2.438l-.159-.149v2.219l.179.169c.292.272.262.258 5.154 2.296 1.795.745 3.488 1.457 3.76 1.58.722.325.931.401 1.216.46.666.136 1.159.026 2.239-.5.702-.341 1.56-.722 3.637-1.616 3.948-1.703 4.922-2.14 5.21-2.332.103-.073.242-.189.311-.265l.123-.136v-1.11c0-.61-.003-1.11-.01-1.11a.724.724 0 0 0-.066.096zm-.036 3.633c-.262.328-.785.58-4.856 2.332-2.657 1.146-3.465 1.504-4.339 1.921-.918.437-1.219.53-1.749.53-.361 0-.729-.086-1.136-.265-.951-.417-1.577-.682-4.353-1.838-3.157-1.315-4.167-1.742-4.505-1.911-.315-.159-.636-.384-.709-.5l-.07-.106v1.13c0 1.295-.023 1.199.325 1.434.384.258.954.51 4.744 2.083 2.65 1.1 3.604 1.501 4.074 1.713.961.431 1.216.5 1.752.47.49-.023.812-.129 1.66-.533.884-.424 1.537-.715 4.422-1.958 4.008-1.726 4.442-1.934 4.747-2.286l.106-.119v-1.106c0-.61-.003-1.11-.007-1.11a.764.764 0 0 0-.106.119z"></path>
                            </svg>
                            <p>Redis</p>
                        </div>
                        <div className="tab-item resume-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-30 -50 200 200" width="90" height="90"><path d="M86.758 70.89c-4.992 0-9.465 2.208-12.528 5.68l-7.851-5.547a21.275 21.275 0 001.312-7.32c0-2.531-.46-4.95-1.27-7.203l7.837-5.488c3.062 3.457 7.523 5.652 12.5 5.652 9.207 0 16.703-7.48 16.703-16.672 0-9.195-7.496-16.672-16.703-16.672-9.211 0-16.707 7.477-16.707 16.672 0 1.645.25 3.23.699 4.735l-7.84 5.488a21.578 21.578 0 00-13.36-7.746v-9.43c7.567-1.586 13.27-8.293 13.27-16.312C62.82 7.53 55.324.055 46.117.055c-9.21 0-16.707 7.476-16.707 16.672 0 7.91 5.555 14.539 12.969 16.238v9.547c-10.117 1.773-17.84 10.59-17.84 21.191 0 10.652 7.797 19.5 17.992 21.211V95c-7.492 1.64-13.12 8.309-13.12 16.273 0 9.196 7.495 16.672 16.706 16.672 9.207 0 16.703-7.476 16.703-16.672 0-7.964-5.629-14.632-13.117-16.273V84.914a21.592 21.592 0 0013.133-7.625l7.902 5.586a16.45 16.45 0 00-.687 4.688c0 9.195 7.496 16.671 16.707 16.671 9.207 0 16.703-7.476 16.703-16.671 0-9.196-7.496-16.672-16.703-16.672zm0-38.984c4.465 0 8.097 3.63 8.097 8.086 0 4.453-3.632 8.082-8.097 8.082-4.469 0-8.102-3.629-8.102-8.082 0-4.457 3.633-8.086 8.102-8.086zm-48.742-15.18c0-4.456 3.632-8.081 8.101-8.081 4.465 0 8.098 3.625 8.098 8.082 0 4.457-3.633 8.082-8.098 8.082-4.469 0-8.101-3.625-8.101-8.082zm16.199 94.547c0 4.457-3.633 8.082-8.098 8.082-4.469 0-8.101-3.625-8.101-8.082 0-4.457 3.632-8.082 8.101-8.082 4.465 0 8.098 3.625 8.098 8.082zm-8.102-36.296c-6.226 0-11.293-5.059-11.293-11.274 0-6.219 5.067-11.277 11.293-11.277 6.23 0 11.297 5.058 11.297 11.277 0 6.215-5.066 11.274-11.297 11.274zm40.645 20.668c-4.469 0-8.102-3.625-8.102-8.082 0-4.458 3.633-8.083 8.102-8.083 4.465 0 8.097 3.625 8.097 8.082 0 4.458-3.632 8.083-8.097 8.083zm0 0" fill="#fff" /></svg>

                            <p>Kafka</p>
                        </div>
                        <div className="tab-item resume-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Rabbitmq-Icon--Streamline-Svg-Logos" height="55" width="50">
                                <desc>
                                    Rabbitmq Icon Streamline Icon: https://streamlinehq.com
                                </desc>
                                <path fill="#FFf" d="M22.805 9.651175H15.287625c-0.2503 0.0016 -0.490775 -0.097125 -0.66775 -0.274125 -0.177 -0.176975 -0.275725 -0.417475 -0.27415 -0.66775V1.1919175c0.000025 -0.249265 -0.0994 -0.488235 -0.276225 -0.6639375 -0.1768 -0.1757025 -0.416375 -0.273625 -0.66565 -0.2720575H10.589975c-0.24925 -0.0015675 -0.48885 0.096355 -0.66565 0.2720575 -0.1768 0.1757025 -0.276225 0.4146725 -0.276225 0.6639375V8.7093c0.001575 0.250275 -0.09715 0.490775 -0.274125 0.66775 -0.176975 0.177 -0.417475 0.275725 -0.66775 0.274125H5.89235c-0.250275 0.0016 -0.490775 -0.097125 -0.66775 -0.274125 -0.176975 -0.176975 -0.2757 -0.417475 -0.274125 -0.66775V1.1919175c0.001575 -0.2502825 -0.09715 -0.4907725 -0.274125 -0.6677525 -0.176975 -0.17698 -0.417475 -0.27570725 -0.66775 -0.2741475H1.1888375c-0.2492625 0 -0.4882325 0.099435 -0.6639375 0.2762425 -0.1757025 0.17681 -0.2736225 0.4163975 -0.272075 0.6656575V22.808075c-0.00156 0.2503 0.0971675 0.490775 0.2741475 0.66775 0.17698 0.177 0.41747 0.275725 0.6677525 0.27415H22.805c0.250275 0.001575 0.490775 -0.09715 0.66775 -0.27415 0.176975 -0.176975 0.2757 -0.41745 0.274125 -0.66775V10.610725c0.0064 -0.253325 -0.090225 -0.4984 -0.267725 -0.67925 -0.1775 -0.180825 -0.42075 -0.281975 -0.67415 -0.2803ZM19.025725 17.633625c0.00155 0.37415 -0.146 0.733525 -0.410025 0.99865 -0.264 0.265125 -0.622775 0.414175 -0.996925 0.414175H15.735c-0.37415 0 -0.7329 -0.14905 -0.996925 -0.414175 -0.264025 -0.265125 -0.411575 -0.6245 -0.41 -0.99865V15.75575c-0.001575 -0.37415 0.145975 -0.733525 0.41 -0.99865 0.264025 -0.265125 0.622775 -0.414175 0.996925 -0.414175h1.883775c0.37415 0 0.732925 0.14905 0.996925 0.414175 0.264025 0.265125 0.411575 0.6245 0.410025 0.99865v1.877875Z" stroke-width="0.25"></path>
                            </svg>

                            <p className='mt-9'>RabbitMQ</p>
                        </div>

                        <div className="tab-item resume-item">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
                                <path fill="#29b6f6" d="M37,24c0-3.314-2.686-6-6-6H5.918C5.323,19.894,5,21.909,5,24s0.323,4.106,0.918,6H31 C34.314,30,37,27.314,37,24z"></path><path fill="#4db6ac" d="M25,44c6.524,0,12.305-3.133,15.954-7.968C38.835,34.151,36.055,33,33,33H7.157 C10.453,39.52,17.196,44,25,44z"></path><path fill="#ffca28" d="M25,4C17.195,4,10.453,8.48,7.157,15H33c3.051,0,5.828-1.148,7.946-3.024 C37.299,7.138,31.525,4,25,4z"></path><path fill="#f9a825" d="M22.073,15c-1.513-3.367-3.845-6.288-6.747-8.501C11.817,8.443,8.957,11.412,7.143,15H22.073z"></path><path fill="#009688" d="M15.326,41.501c2.902-2.213,5.233-5.134,6.747-8.501H7.143 C8.957,36.588,11.817,39.557,15.326,41.501z"></path><path fill="#212121" d="M5.928,18C5.332,19.895,5,21.907,5,24s0.332,4.105,0.928,6h17.234C23.703,28.092,24,26.081,24,24 s-0.297-4.092-0.837-6H5.928z"></path>
                            </svg>
                            <p>ElasticSearch</p>
                        </div>


                        <div className="tab-item resume-item">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
                                <path fill="#fbc02d" d="M25,26H7V5h6c6.627,0,12,5.373,12,12V26z"></path><rect width="17" height="18" x="24" y="25" fill="#4db6ac"></rect><rect width="5" height="18" x="24" y="25" fill="#26a69a"></rect><path fill="#424242" d="M25,25H7v1c0,9.389,7.611,17,17,17h1V25z"></path>
                            </svg>
                            <p>Logstash</p>
                        </div>



                        <div className="tab-item resume-item">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
                                <polygon fill="#ec407a" points="10,41 10,5 40,5"></polygon><path fill="#4db6ac" d="M40.659,44C38.492,29.843,26.262,19,11.5,19c-0.503,0-1.003,0.013-1.5,0.038V44H40.659z"></path><path fill="#009688" d="M10,41.2V44h5.667l14.958-17.949c-1.564-1.334-3.271-2.503-5.092-3.49L10,41.2z"></path><path fill="#212121" d="M11.5,19c-0.503,0-1.003,0.013-1.5,0.038V24v17l15.412-18.495C21.266,20.28,16.536,19,11.5,19z"></path>
                            </svg>
                            <p>Logstash</p>
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
