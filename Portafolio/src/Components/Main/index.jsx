import React, { useState, useRef } from 'react'
import "./estilos.css"
import "./estilos2.css"
import "./Responsive.css"
import foto from "./../../Assets/Foto2.jpeg"
import tmdb from "./../../Assets/TMDB.jpeg"
import img1 from "./../../Assets/img1.jpeg"
import img2 from "./../../Assets/img2.jpeg"
import img3 from "./../../Assets/img3.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faHtml5, faCss3, faGitAlt, faSass, faBootstrap, faGithub, faGit, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPeopleGroup, faLightbulb, faCode, faArrowTrendUp, faGear, faSun, faArrowCircleRight, faLocationDot, faPhone, faEnvelope, faMoon, faArrowLeft, faDatabase } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2"
import tailwind from "./../../Assets/tailwind.svg"
import jest from "./../../Assets/jest.svg"
import typescript from "./../../Assets/typescript.svg"
import nextjs from "./../../Assets/nextjs.svg"
const Header = () => {
    const [selectedOption, setSelectedOption] = useState('About Me');
    const [estado, setEstado] = useState(false)
    const [isChecked, setIsChecked] = useState(false);


    const cambiarEstado = (e) => {
        const query = document.querySelector(".activo")
        const queryDark = document.querySelector(".activo-dark")
        query?.classList?.remove("activo")
        queryDark?.classList?.remove("activo-dark")
        setEstado(!estado)
        const clase2 = document.querySelector(".container-buttons-flex")
        if (clase2) {
            clase2?.classList?.remove("container-buttons-flex")
            clase2?.classList?.add("container-buttons")
        }
    }

    const cambiar = (e) => {
        const query = document.querySelector(".activo")
        const queryDark = document.querySelector(".activo-dark")
        if (query) {
            query?.classList?.remove("activo")
            e.target.classList?.add("activo")
        }
        if (queryDark) {
            queryDark?.classList?.remove("activo-dark")
            e.target.classList?.add("activo-dark")
        }
        const a = e.target.getAttribute('value')
        console.log(a)
        setSelectedOption(a)

    }


    const MostarButtons = (e) => {

        e.preventDefault()

        const clase = document.querySelector(".container-buttons")
        const clase2 = document.querySelector(".container-buttons-flex")

        if (clase) {
            clase?.classList?.remove("container-buttons")
            clase?.classList?.add("container-buttons-flex")
        } else if (clase2) {
            clase2?.classList?.remove("container-buttons-flex")
            clase2?.classList?.add("container-buttons")
        } else if (undefined) {
            console.log("error")
        }
    }

    const handleCheckboxClick = (e) => {

        const activos = document.querySelector(".activo-ul");

        const input = e.target

        const inputCheck = document.getElementById("check")
        if (activos && input !== inputCheck) {
            activos.classList?.remove("activo-ul");
            e.target.classList?.add("activo-ul");
            const a = e.target.getAttribute('value')
            setSelectedOption(a)
        }
        setIsChecked(!isChecked);
    }


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const input1 = document.getElementById("input1")
        const input2 = document.getElementById("input2")
        const input3 = document.getElementById("input3")
        const input4 = document.getElementById("input4")

        if (input1.value.length > 2 || input3.value.length > 4 || input4.value.length > 5) {
            emailjs.sendForm("service_6td7czh", "template_l7sg8cu", form.current, "zLduDFw1jxUYLdXlK")

                .then(() => {
                    input1.value = ""
                    input2.value = ""
                    input3.value = ""
                    input4.value = ""

                    Swal.fire({
                        title: "Formulario Enviado",
                        text: `Muchas gracias por comunicarte. En breve estaremos respondiendo`,
                        icon: "success",
                        background: "black",
                        color: "white"
                    })
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Profavor complete el formulario'
            })
        }
    }


    const handleDownload = () => {
        window.open("https://drive.google.com/drive/folders/1gyU8LOwySlLhlUKkjgS5C01aeSwjbyXq?usp=sharing", '_blank');
    };


    return (
        <body>
            {/*--Nombre Animacion-*/}
            <div className='descr'>
                <div className='Mi'>
                    <h2>Lautaro Rodriguez</h2>
                    <h3>Frontend Developer</h3>

                </div>
            </div>


            {
                estado === false

                    ?
                    <>
                        <div className='container-buttons'>
                            <a href='https://www.linkedin.com/in/lautaro-rodriguez-o-valle-501a55263/' target='_blank'><FontAwesomeIcon className='iconoHeaderLinkedin' icon={faLinkedin} /></a>
                            <a href='#sobre' onClick={cambiarEstado}><FontAwesomeIcon className='iconoHeaderSun' icon={faSun} /></a>
                        </div>
                        <div className='BtonFlecha'>
                            <button onClick={MostarButtons}><FontAwesomeIcon icon={faArrowLeft} /></button>
                        </div>

                        <div className='Container-header'>

                            {/*--Header-*/}


                            <header className='header-dark'>
                                <nav className='nav-dark'>
                                    <ul className='ul-dark'>
                                        <a value="About Me" onClick={cambiar} href='#sobre' className='activo'>About Me</a>
                                        <a value="Skills" onClick={cambiar} href='#habilidades'>Skills</a>
                                        <a value="Technologies" onClick={cambiar} href='#tecnologias'>Technologies</a>
                                        <a value="proyects" onClick={cambiar} href='#proyectos'>Proyects</a>
                                        <a value="contact" onClick={cambiar} href='#contacto'>Contact</a>
                                    </ul>
                                </nav>

                                <nav className='nav-dark-selec'>
                                    <input type="checkbox" id='check' checked={isChecked} onChange={handleCheckboxClick}></input>
                                    <label htmlFor="check">{selectedOption}</label>

                                    <ul className='ulSelect'>
                                        <li>
                                            <a value="About Me" href='#sobre' onClick={handleCheckboxClick} className='activo-ul'>About Me</a>
                                        </li>

                                        <li>
                                            <a value="Skills" href="#habilidades" onClick={handleCheckboxClick} className=''>Skills</a>
                                        </li>

                                        <li>
                                            <a value="Technologies" href="#tecnologias" onClick={handleCheckboxClick} className=''>Technologies</a>
                                        </li>

                                        <li>
                                            <a value="proyects" href="#proyectos" onClick={handleCheckboxClick} className=''>Proyects</a>
                                        </li>

                                        <li>
                                            <a value="contact" href="#contacto" onClick={handleCheckboxClick} className=''>Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </header>




                            {/*--Info Personal--*/}

                            <main className="container-all">
                                <div id='sobre' className="slider-view">
                                    <section className='contianer-info'>
                                        <article className='article-p-dark'>
                                            <h2>About Me</h2>
                                            <p>Hello, let me introduce myself. My name is Lautaro Rodriguez, and I am a Junior React Developer. I am passionate about programming, both in the Back End and Front End. Currently, I am a Frontend developer with many capabilities and skills; therefore, I have started studying Backend programming to become a Full Stack developer in the future.<button className='cv' onClick={handleDownload}>CV</button></p>

                                        </article>

                                        <article className='article-img'>
                                            <img src={foto} />
                                        </article>
                                    </section>
                                </div>


                                {/*--Habilidades-*/}

                                <div id='habilidades' className="slider-view">
                                    <section className='contianer-habilidades'>
                                        <h2>Skills</h2>
                                        <article className='habilidades-dark'>
                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faPeopleGroup} />
                                                <p>I have the ability to work effectively in a team, and I am willing and passionate about offering my assistance while also being open to receiving corrections as a means of learning.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faLightbulb} />
                                                <p>I am a highly creative individual, and this creativity aids me in finding solutions to various problems. I believe there are multiple solutions to every problem.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faCode} />
                                                <p>I love programming, which allows me to sit for hours coding without feeling it as a burden but rather as something enjoyable. Practicing simultaneously becomes a learning experience for me.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faArrowTrendUp} />
                                                <p>I have a long journey in my programming career, but every day I progress, whether it's through a new course or practicing with different projects. I enjoy the learning journey. </p>
                                            </div>
                                        </article>
                                    </section>
                                </div>


                                {/*--Tecnologias-*/}
                                <div id='tecnologias' className="slider-view">
                                    <section className='contianer-tecnologias'>
                                        <h2>Technologies</h2>
                                        <article className='tecnologias'>
                                            <div className='div'>
                                                <FontAwesomeIcon className='icon html' icon={faHtml5} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faCss3} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faJs} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faSass} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faGit} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faGithub} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faBootstrap} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faReact} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faDatabase} />
                                            </div>

                                            <div className='div'>
                                                <img src={tailwind} className="icon" ></img>
                                            </div>
                                            
                                            <div className='div'>
                                                <img src={jest} className="icon" ></img>
                                            </div>

                                            <div className='div'>
                                                <img src={typescript} className="icon" ></img>
                                            </div>

                                            <div className='div'>
                                                <img src={nextjs} className="icon" ></img>
                                            </div>
                                        </article>
                                    </section>
                                </div>



                                {/*--Proyectos-*/}
                                <div id='proyectos' className="slider-view">
                                    <section className='contianer-Proyectos-dark'>
                                        <div>
                                            <h2>Proyects</h2>
                                        </div>
                                        <div>
                                            <article className='article'>
                                                <a href="https://practicando-con-css.vercel.app/" target='_blank'><img className='img' src={img1} /></a>
                                                <div className='posicionh2'>
                                                    <h2>E-commerce</h2>
                                                </div>
                                                <div className='posicionp'>
                                                    <p>An e-commerce platform for cars with storage implemented within the localStorage, featuring various cars available for sale.</p>
                                                </div>

                                                <div className='divSpan'>
                                                    <span>HTML, CSS, React</span>  <span className='spanGit'><a target='_blank' href='https://github.com/LautaroRo/Practicando-con-css.git'>GitHub</a></span>
                                                </div>

                                            </article>

                                            <article className='article'>

                                                <a href="https://calculadora-three-brown.vercel.app/" target='_blank'><img className='img' src={img2} /></a>
                                                <div className='posicionh2'>
                                                    <h2>Calculator</h2>
                                                </div>
                                                <div className='posicionp'>
                                                    <p>Fully functional calculator that allows you to perform any mathematical operation seamlessly.</p>
                                                </div>

                                                <div className='divSpan'>
                                                    <span>HTML, CSS, React</span>  <span className='spanGit'><a target='_blank' href='https://github.com/LautaroRo/Calculadora.git'>GitHub</a></span>
                                                </div>


                                            </article>

                                            <article className='article'>

                                                <a href="https://poke-api-ecru.vercel.app/" target='_blank'><img className='img' src={img3} /></a>
                                                <div className='posicionh2'>
                                                    <h2>Poke Api</h2>
                                                </div>
                                                <div className='posicionp'>
                                                    <p>This project aims to make the most of the Poke API, allowing access to detailed information about Pokémon and their statistics.</p>
                                                </div>

                                                <div className='divSpan'>
                                                    <span>HTML, CSS, React</span>  <span className='spanGit'><a target='_blank' href='https://github.com/LautaroRo/PokeAPI.git'>GitHub</a></span>
                                                </div>

                                            </article>

                                            <article className='article'>

                                                <a href="https://tmdb-api-kappa.vercel.app/" target='_blank'><img className='img' src={tmdb} /></a>
                                                <div className='posicionh2'>
                                                    <h2>TMDB Api</h2>
                                                </div>
                                                <div className='posicionp'>
                                                    <p>This project aims to leverage my skills with a significant challenge, attempting to mimic a streaming platform such as Netflix.</p>
                                                </div>

                                                <div className='divSpan'>
                                                    <span>HTML, CSS, React</span>  <span className='spanGit'><a target='_blank' href='https://github.com/LautaroRo/TMDB-API.git'>GitHub</a></span>
                                                </div>

                                            </article>


                                        </div>
                                    </section>
                                </div>


                                {/*--Contacto-*/}
                                <div id='contacto' className="slider-view">
                                    <section className='contianer-contacto'>
                                        <div>
                                            <h2 className='h2'>Contact</h2>
                                        </div>
                                        <article>
                                            <div className="content">
                                                <div className="contact-wrapper">
                                                    <div className="contact-form-dark">
                                                        <form ref={form} onSubmit={sendEmail}>
                                                            <p>
                                                                <label>Name</label>
                                                                <input type="text" name='user_name' id="input1" />
                                                            </p>

                                                            <p>
                                                                <label>Email</label>
                                                                <input type="email" name='user_email' id="input2" required />
                                                            </p>

                                                            <p>
                                                                <label>Reason</label>
                                                                <input type="text" name="message" id="input3" />
                                                            </p>

                                                            <p className='block'>
                                                                <label>Message</label>
                                                                <textarea name="message" id="input4" rows="3"></textarea>
                                                            </p>
                                                            <p className='block'>
                                                                <button type="submit" value="Send">
                                                                    Send
                                                                </button>
                                                            </p>
                                                        </form>
                                                    </div>
                                                    <div className="contact-info-dark">
                                                        <h2>More Info</h2>
                                                        <ul className='ul'>
                                                            <li>
                                                                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Cordoba Argentina
                                                            </li>
                                                            <li>
                                                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+54 9 351-341-3701
                                                            </li>
                                                            <li>
                                                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>lautarorodriguezovalle@gmail.com
                                                            </li>
                                                        </ul>
                                                        <p>
                                                            Junior React developer with no professional experience, eager to learn and work.
                                                        </p>

                                                        <p>
                                                            Lautaro Rodriguez Ovalle
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </article>
                                    </section>
                                </div>
                            </main>
                        </div>
                    </>



                    :










                    <>
                        <div className='container-buttons'>
                            <a className="IconoLink" href='https://www.linkedin.com/in/lautaro-rodriguez-o-valle-501a55263/' target='_blank'><FontAwesomeIcon className='iconoHeaderLinkedin' icon={faLinkedin} /></a>
                            <a href='#sobre' onClick={cambiarEstado}><FontAwesomeIcon className='iconoHeader' id='moon' icon={faMoon} /></a>
                        </div>
                        <div className='BtonFlecha'>
                            <button onClick={MostarButtons}><FontAwesomeIcon icon={faArrowLeft} /></button>
                        </div>
                        <div className='Container-header-light'>

                            {/*--Header-*/}


                            <header className='header-light'>
                                <nav className='nav-light'>
                                    <ul className='ul-light'>
                                        <a value="About Me" onClick={cambiar} href='#sobre' className="activo-dark">About Me</a>
                                        <a value="Skills" onClick={cambiar} href='#habilidades'>Skills</a>
                                        <a value="Technologies" onClick={cambiar} href='#tecnologias'>Technologies</a>
                                        <a value="proyects" onClick={cambiar} href='#proyectos'>Proyects</a>
                                        <a value="contact" onClick={cambiar} href='#contacto'>Contact</a>
                                    </ul>
                                </nav>
                                <nav className='nav-dark-selec'>
                                    <input type="checkbox" id='check' checked={isChecked} onChange={handleCheckboxClick}></input>
                                    <label htmlFor="check">{selectedOption}</label>

                                    <ul className='ulSelect'>
                                        <li>
                                            <a value="About Me" href='#sobre' onClick={handleCheckboxClick} className='activo-ul'>About Me</a>
                                        </li>

                                        <li>
                                            <a value="Skills" href="#habilidades" onClick={handleCheckboxClick} className=''>Skills</a>
                                        </li>

                                        <li>
                                            <a value="Technologies" href="#tecnologias" onClick={handleCheckboxClick} className=''>Technologies</a>
                                        </li>

                                        <li>
                                            <a value="proyects" href="#proyectos" onClick={handleCheckboxClick} className=''>Proyects</a>
                                        </li>

                                        <li>
                                            <a value="contact" href='#contacto' onClick={handleCheckboxClick} className=''>Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </header>




                            {/*--Info Personal--*/}

                            <main className="container-all">
                                <div id='sobre' className="slider-view">
                                    <section className='contianer-info'>
                                        <article className='article-p-dark'>
                                            <h2>About Me</h2>
                                            <p>Hello, let me introduce myself. My name is Lautaro Rodriguez, and I am a Junior React Developer. I am passionate about programming, both in the Back End and Front End. Currently, I am a Frontend developer with many capabilities and skills; therefore, I have started studying Backend programming to become a Full Stack developer in the future.<button className='cv' onClick={handleDownload}>CV</button></p>

                                        </article>

                                        <article className='article-img'>
                                            <img src={foto} />
                                        </article>
                                    </section>
                                </div>


                                {/*--Habilidades-*/}

                                <div id='habilidades' className="slider-view">
                                    <section className='contianer-habilidades'>
                                        <h2>Skills</h2>
                                        <article className='habilidades-light'>
                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faPeopleGroup} />
                                                <p>I have the ability to work effectively in a team, and I am willing and passionate about offering my assistance while also being open to receiving corrections as a means of learning.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faLightbulb} />
                                                <p>I am a highly creative individual, and this creativity aids me in finding solutions to various problems. I believe there are multiple solutions to every problem.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faCode} />
                                                <p>I love programming, which allows me to sit for hours coding without feeling it as a burden but rather as something enjoyable. Practicing simultaneously becomes a learning experience for me.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faArrowTrendUp} />
                                                <p>I have a long journey in my programming career, but every day I progress, whether it's through a new course or practicing with different projects. I enjoy the learning journey.</p>
                                            </div>
                                        </article>
                                    </section>
                                </div>


                                <div id='tecnologias' className="slider-view">
                                    <section className='contianer-tecnologias'>
                                        <h2>Technologies</h2>
                                        <article className='tecnologias-light'>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon html' icon={faHtml5} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faCss3} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faJs} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faSass} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faGit} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faGithub} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faBootstrap} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faReact} />
                                            </div>

                                            <div className='div'>
                                                <FontAwesomeIcon className='icon' icon={faDatabase} />
                                            </div>

                                            <div className='div'>
                                                <img src={tailwind} className="icon" ></img>
                                            </div>
                                            
                                            <div className='div'>
                                                <img src={jest} className="icon" ></img>
                                            </div>

                                            <div className='div'>
                                                <img src={typescript} className="icon" ></img>
                                            </div>

                                            <div className='div'>
                                                <img src={nextjs} className="icon" ></img>
                                            </div>
                                        </article>
                                    </section>
                                </div>



                                {/*--Proyectos-*/}
                                <div id='proyectos' className="slider-view">
                                    <section className='contianer-Proyectos'>
                                        <div>
                                            <h2>Proyects</h2>
                                        </div>
                                        <div>
                                            <article className='article-light'>

                                                <a href="https://practicando-con-css.vercel.app/" target='_blank'><img className='img' src={img1} /></a>
                                                <div className='posicionh2'>
                                                    <h2>E-commerce</h2>
                                                </div>
                                                <div className='posicionp'>
                                                    <p>An e-commerce platform for cars with storage implemented within the localStorage, featuring various cars available for sale.</p>
                                                </div>

                                                <div className='divSpan'>
                                                    <span>HTML, CSS, React</span>  <span className='spanGit'><a target='_blank' href='https://github.com/LautaroRo/Practicando-con-css.git'>GitHub</a></span>
                                                </div>

                                            </article>

                                            <article className='article-light'>

                                                <a href="https://calculadora-three-brown.vercel.app/" target='_blank'><img className='img' src={img2} /></a>
                                                <div className='posicionh2'>
                                                    <h2>Calculator</h2>
                                                </div>
                                                <div className='posicionp'>
                                                    <p>Fully functional calculator that allows you to perform any mathematical operation seamlessly.</p>
                                                </div>

                                                <div className='divSpan'>
                                                    <span>HTML, CSS, React</span>  <span className='spanGit'><a target='_blank' href='https://github.com/LautaroRo/PokeAPI.git'>GitHub</a></span>
                                                </div>

                                            </article>

                                            <article className='article-light'>

                                                <a href="https://poke-api-ecru.vercel.app/" target='_blank'><img className='img' src={img3} /></a>
                                                <div className='posicionh2'>
                                                    <h2>Poke Api</h2>
                                                </div>
                                                <div className='posicionp'>
                                                    <p>This project aims to make the most of the Poke API, allowing access to detailed information about Pokémon and their statistics.</p>
                                                </div>

                                                <div className='divSpan'>
                                                    <span>HTML, CSS, React</span>  <span className='spanGit'><a target='_blank' href='https://github.com/LautaroRo/PokeAPI.git'>GitHub</a></span>
                                                </div>

                                            </article>

                                            <article className='article-light'>

                                                <a href="https://tmdb-api-kappa.vercel.app/" target='_blank'><img className='img' src={tmdb} /></a>
                                                <div className='posicionh2'>
                                                    <h2>TMDB Api</h2>
                                                </div>
                                                <div className='posicionp'>
                                                    <p>This project aims to leverage my skills with a significant challenge, attempting to mimic a streaming platform such as Netflix.</p>
                                                </div>

                                                <div className='divSpan'>
                                                    <span>HTML, CSS, React</span>  <span className='spanGit'><a target='_blank' href='https://github.com/LautaroRo/TMDB-API.git'>GitHub</a></span>
                                                </div>

                                            </article>
                                        </div>
                                    </section>
                                </div>


                                {/*--Contacto-*/}
                                <div id='contacto' className="slider-view">
                                    <section className='contianer-contacto-light'>
                                        <div>
                                            <h2 className='h2'>Contact</h2>
                                        </div>
                                        <article>
                                            <div className="content">
                                                <div className="contact-wrapper">
                                                    <div className="contact-form">
                                                        <form>
                                                            <p>
                                                                <label>Name</label>
                                                                <input type="text" name='user_name' id="input1" />
                                                            </p>

                                                            <p>
                                                                <label>Email</label>
                                                                <input type="email" name='user_email' id="input2" required />
                                                            </p>

                                                            <p>
                                                                <label>Reason</label>
                                                                <input type="text" name="message" id="input3" />
                                                            </p>

                                                            <p className='block'>
                                                                <label>Menssage</label>
                                                                <textarea name="message" id="input4" rows="3"></textarea>
                                                            </p>
                                                            <p className='block'>
                                                                <button type="submit" value="Send">
                                                                    Send
                                                                </button>
                                                            </p>
                                                        </form>
                                                    </div>
                                                    <div className="contact-info">
                                                        <h2>More Info</h2>
                                                        <ul className='ul'>
                                                            <li>
                                                                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Cordoba Argentina
                                                            </li>
                                                            <li>
                                                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+54 9 351-341-3701
                                                            </li>
                                                            <li>
                                                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>lautarorodriguezovalle@gmail.com
                                                            </li>
                                                        </ul>
                                                        <p>
                                                            Junior React developer with no professional experience, eager to learn and work.
                                                        </p>

                                                        <p>
                                                            Lautaro Rodriguez Ovalle
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </article>
                                    </section>
                                </div>




                            </main>
                        </div>
                    </>



            }
        </body>
    )
}

export default Header