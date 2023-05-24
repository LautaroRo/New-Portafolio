import React, { useState, useRef } from 'react'
import "./estilos.css"
import "./estilos2.css"
import "./Responsive.css"
import foto from "./../../Assets/Foto2.jpeg"
import img1 from "./../../Assets/img1.jpeg"
import img2 from "./../../Assets/img2.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faHtml5, faCss3, faGitAlt, faSass, faBootstrap, faGithub, faGit, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPeopleGroup, faLightbulb, faCode, faArrowTrendUp, faGear, faSun, faArrowCircleRight, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2"

const Header = () => {
    const [selectedOption, setSelectedOption] = useState('sobre');
    const [estado, setEstado] = useState(false)

    const [isChecked, setIsChecked] = useState(false);


    const cambiar = (e) => {

        const query = document.querySelector(".activo")
        const queryDark = document.querySelector(".activo-dark")

        if (query) {
            query.classList?.remove("activo")
            e.target.classList?.add("activo")
        }

        if (queryDark) {
            queryDark.classList?.remove("activo-dark")
            e.target.classList?.add("activo-dark")
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
        
        if(input1.value.length > 2 || input3.value.length > 4 || input4.value.length > 5){
            emailjs.sendForm("service_6td7czh", "template_l7sg8cu", form.current, "zLduDFw1jxUYLdXlK")
            
            .then(()=>{
                input1.value= ""
                input2.value= ""
                input3.value= ""
                input4.value= ""
    
                Swal.fire({
                    title:"Formulario Enviado",
                    text:`Muchas gracias por comunicarte. En breve estaremos respondiendo`,
                    icon:"success",
                    background:"black",
                    color:"white"
                })
            })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Profavor complete el formulario'
                })
            }
        }




    return (
        <body>
            {/*--Nombre Animacion-*/}
            <div className='descr'>
                <div className='Mi'>
                    <h2>Lautaro Rodriguez</h2>
                    <h3>Desarrollador front end</h3>

                </div>
            </div>


            {
                estado === false

                    ?
                    <>
                        <div className='container-buttons'>
                            <a href='https://www.linkedin.com/in/lautaro-rodriguez-o-valle-501a55263/' target='_blank'><FontAwesomeIcon className='iconoHeader' icon={faLinkedin} /></a>
                            <button onClick={() => setEstado(!estado)}><FontAwesomeIcon className='iconoHeader' icon={faSun} /></button>
                        </div>

                        <div className='Container-header'>

                            {/*--Header-*/}


                            <header className='header-light'>
                                <nav className='nav-light'>
                                    <ul className='ul-light'>
                                        <a onClick={cambiar} className='activo' href='#sobre'>Sobre Mi</a>
                                        <a href='#habilidades' onClick={cambiar}>Habilidades</a>
                                        <a onClick={cambiar} href='#tecnologias'>Tecnologias</a>
                                        <a onClick={cambiar} href='#proyectos'>Proyectos</a>
                                        <a onClick={cambiar} href='#contacto'>Contacto</a>
                                    </ul>
                                </nav>

                                <nav className='nav-light-selec'>
                                    <input type="checkbox" id='check' checked={isChecked} onChange={handleCheckboxClick}></input>
                                    <label htmlFor="check">{selectedOption}</label>

                                    <ul className='ulSelect'>
                                        <li>
                                            <a value="sobre" href='#sobre' onClick={handleCheckboxClick} className='activo-ul'>Sobre Mi</a>
                                        </li>

                                        <li>
                                            <a value="habilidades" href="#habilidades" onClick={handleCheckboxClick} className=''>Habilidades</a>
                                        </li>

                                        <li>
                                            <a value="tecnologias" href="#tecnologias" onClick={handleCheckboxClick} className=''>Tecnologias</a>
                                        </li>

                                        <li>
                                            <a value="proyectos" href="#proyectos" onClick={handleCheckboxClick} className=''>Proyectos</a>
                                        </li>

                                        <li>
                                            <a value="contacto" href="#contacto" onClick={handleCheckboxClick} className=''>Contacto</a>
                                        </li>
                                    </ul>
                                </nav>
                            </header>




                            {/*--Info Personal--*/}

                            <main className="container-all">
                                <div id='sobre' className="slider-view">
                                    <section className='contianer-info'>
                                        <article className='article-p-light'>
                                            <h2>Sobre Mi</h2>
                                            <p>Hola, me presento. Mi nombre es Lautaro Rodriguez y soy un Desarrollador Junior en React. Me apasiona la programación, tanto en el Back End como en el Front End. Cuando haya perfeccionado mis habilidades en el Front End, comenzaré a trabajar en el Back End para convertirme en un programador Full Stack en el futuro.</p>

                                        </article>

                                        <article className='article-img'>
                                            <img src={foto} />
                                        </article>
                                    </section>
                                </div>


                                {/*--Habilidades-*/}

                                <div id='habilidades' className="slider-view">
                                    <section className='contianer-habilidades'>
                                        <h2>Habilidades</h2>
                                        <article className='habilidades-Light'>
                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faPeopleGroup} />
                                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tambien escuchar correciones para poder aprender.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faLightbulb} />
                                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tamb escuchar correciones.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faCode} />
                                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tamb escuchar correciones.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faArrowTrendUp} />
                                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tamb escuchar correciones.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faGear} />
                                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tamb escuchar correciones.</p>
                                            </div>
                                        </article>
                                    </section>
                                </div>


                                {/*--Tecnologias-*/}
                                <div id='tecnologias' className="slider-view">
                                    <section className='contianer-tecnologias'>
                                        <h2>Tecnologias</h2>
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
                                        </article>
                                    </section>
                                </div>



                                {/*--Proyectos-*/}
                                <div id='proyectos' className="slider-view">
                                    <section className='contianer-Proyectos-light'>
                                        <div>
                                            <h2>Proyectos</h2>
                                        </div>
                                        <div>
                                            <article className='article'>
                                                <a href="https://practicando-con-css.vercel.app/" target='_blank'><img className='img' src={img1} /></a>
                                                <div className='posicionh2'>
                                                    <h2>E-commerce</h2>
                                                </div>
                                                <div className='posicionp'>
                                                    <p>E-coomerce de autos el cual tiene almacenamiento dentro del localStorage, el cual tiene distintos autos en venta.</p>
                                                </div>

                                                <div className='divSpan'>
                                                    <span>HTML, CSS, React</span>  <span className='spanGit'><a target='_blank' href='https://github.com/LautaroRo/Practicando-con-css.git'>GitHub</a></span>
                                                </div>

                                            </article>

                                            <article className='article'>

                                                <a href="https://calculadora-three-brown.vercel.app/" target='_blank'><img className='img' src={img2} /></a>
                                                <div className='posicionh2'>
                                                    <h2>Calculadora</h2>
                                                </div>
                                                <div className='posicionp'>
                                                    <p>Calculadora totalmente funcional, con la que podras hacer cualquier operacion matematica sin problemas.</p>
                                                </div>

                                                <div className='divSpan'>
                                                    <span>HTML, CSS, React</span>  <span className='spanGit'><a target='_blank' href='https://github.com/LautaroRo/Calculadora.git'>GitHub</a></span>
                                                </div>
                                                

                                            </article>
                                        </div>
                                    </section>
                                </div>


                                {/*--Contacto-*/}
                                <div id='contacto' className="slider-view">
                                    <section className='contianer-contacto'>
                                        <div>
                                            <h2 className='h2'>Contacto</h2>
                                        </div>
                                        <article>
                                            <div className="content">
                                                <div className="contact-wrapper">
                                                    <div className="contact-form-dark">
                                                        <form ref={form} onSubmit={sendEmail}>
                                                            <p>
                                                                <label>Nombre</label>
                                                                <input type="text" name='user_name' id="input1" />
                                                            </p>

                                                            <p>
                                                                <label>Email</label>
                                                                <input type="email" name='user_email' id="input2" required />
                                                            </p>

                                                            <p>
                                                                <label>Motivo</label>
                                                                <input type="text" name="message" id="input3" />
                                                            </p>

                                                            <p className='block'>
                                                                <label>Mensaje</label>
                                                                <textarea name="message" id="input4" rows="3"></textarea>
                                                            </p>
                                                            <p className='block'>
                                                                <button type="submit" value="Send">
                                                                    Enviar
                                                                </button>
                                                            </p>
                                                        </form>
                                                    </div>
                                                    <div className="contact-info-dark">
                                                        <h2>Mas Info</h2>
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
                                                            React developer junior sin experiencia laboral, con muchas ganas de aprender y trabajar.
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
                            <button><FontAwesomeIcon className='iconoHeader' icon={faLinkedin} /></button>
                            <button><FontAwesomeIcon onClick={() => setEstado(!estado)} className='iconoHeader' icon={faSun} /></button>
                        </div>

                        <div className='Container-header-dark'>

                            {/*--Header-*/}


                            <header className='header-dark'>
                                <nav className='nav-dark'>
                                    <ul className='ul-dark'>
                                        <a onClick={cambiar} className='activo-dark' href='#sobre'>Sobre Mi</a>
                                        <a href='#habilidades' onClick={cambiar}>Habilidades</a>
                                        <a onClick={cambiar} href='#tecnologias'>Tecnologias</a>
                                        <a onClick={cambiar} href='#proyectos'>Proyectos</a>
                                        <a onClick={cambiar} href='#contacto'>Contacto</a>
                                    </ul>
                                </nav>
                                <nav className='nav-light-selec'>
                                    <input type="checkbox" id='check' checked={isChecked} onChange={handleCheckboxClick}></input>
                                    <label htmlFor="check">{selectedOption}</label>

                                    <ul className='ulSelect'>
                                        <li>
                                            <a value="sobre" href='#sobre' onClick={handleCheckboxClick} className='activo-ul'>Sobre Mi</a>
                                        </li>

                                        <li>
                                            <a value="habilidades" href="#habilidades" onClick={handleCheckboxClick} className=''>Habilidades</a>
                                        </li>

                                        <li>
                                            <a value="tecnologias" href="#tecnologias" onClick={handleCheckboxClick} className=''>Tecnologias</a>
                                        </li>

                                        <li>
                                            <a value="proyectos" href="#proyectos" onClick={handleCheckboxClick} className=''>Proyectos</a>
                                        </li>

                                        <li>
                                            <a value="contacto" href='#contacto' onClick={handleCheckboxClick}>Contacto</a>
                                        </li>
                                    </ul>
                                </nav>
                            </header>




                            {/*--Info Personal--*/}

                            <main className="container-all">
                                <div id='sobre' className="slider-view">
                                    <section className='contianer-info'>
                                        <article className='article-p-dark'>
                                            <h2>Sobre Mi</h2>
                                            <p>Hola, me presento. Mi nombre es Lautaro Rodriguez y soy un Desarrollador Junior en React. Me apasiona la programación, tanto en el Back End como en el Front End. Cuando haya perfeccionado mis habilidades en el Front End, comenzaré a trabajar en el Back End para convertirme en un programador Full Stack en el futuro.</p>

                                        </article>

                                        <article className='article-img'>
                                            <img src={foto} />
                                        </article>
                                    </section>
                                </div>


                                {/*--Habilidades-*/}

                                <div id='habilidades' className="slider-view">
                                    <section className='contianer-habilidades'>
                                        <h2>Habilidades</h2>
                                        <article className='habilidades-dark'>
                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faPeopleGroup} />
                                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tambien escuchar correciones para poder aprender.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faLightbulb} />
                                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tamb escuchar correciones.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faCode} />
                                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tamb escuchar correciones.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faArrowTrendUp} />
                                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tamb escuchar correciones.</p>
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className='iconoHabilidades' icon={faGear} />
                                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tamb escuchar correciones.</p>
                                            </div>
                                        </article>
                                    </section>
                                </div>


                                <div id='tecnologias' className="slider-view">
                                    <section className='contianer-tecnologias'>
                                        <h2>Tecnologias</h2>
                                        <article className='tecnologias-dark'>

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
                                        </article>
                                    </section>
                                </div>



                                {/*--Proyectos-*/}
                                <div id='proyectos' className="slider-view">
                                    <section className='contianer-Proyectos'>
                                        <div>
                                            <h2>Proyectos</h2>
                                        </div>
                                        <div>
                                            <article className='article-light'>

                                                <a href="https://practicando-con-css.vercel.app/" target='_blank'><img className='img' src={img1} /></a>
                                                <div className='posicionh2'>
                                                    <h2>E-commerce</h2>
                                                </div>
                                                <div className='posicionp'>
                                                    <p>E-coomerce de autos el cual tiene almacenamiento dentro del localStorage, el cual tiene distintos autos en venta.</p>
                                                </div>

                                                <div className='divSpan'>
                                                    <span>HTML, CSS, React</span>  <span className='spanGit'><a target='_blank' href='https://github.com/LautaroRo/Practicando-con-css.git'>GitHub</a></span>
                                                </div>

                                            </article>

                                            <article className='article-light'>

                                                <a href="https://calculadora-three-brown.vercel.app/" target='_blank'><img className='img' src={img2} /></a>
                                                <div className='posicionh2'>
                                                    <h2>Calculadora</h2>
                                                </div>
                                                <div className='posicionp'>
                                                    <p>Calculadora totalmente funcional, con la que podras hacer cualquier operacion matematica sin problemas.</p>
                                                </div>

                                                <div className='divSpan'>
                                                    <span>HTML, CSS, React</span>  <span className='spanGit'><a target='_blank' href='https://github.com/LautaroRo/Calculadora.git'>GitHub</a></span>
                                                </div>

                                            </article>
                                        </div>
                                    </section>
                                </div>


                                {/*--Contacto-*/}
                                <div id='contacto' className="slider-view">
                                    <section className='contianer-contacto-light'>
                                        <div>
                                            <h2 className='h2'>Contacto</h2>
                                        </div>
                                        <article>
                                            <div className="content">
                                                <div className="contact-wrapper">
                                                    <div className="contact-form">
                                                        <form>
                                                            <p>
                                                                <label>Nombre</label>
                                                                <input type="text" name='user_name' id="input1" />
                                                            </p>

                                                            <p>
                                                                <label>Email</label>
                                                                <input type="email" name='user_email' id="input2" required />
                                                            </p>

                                                            <p>
                                                                <label>Motivo</label>
                                                                <input type="text" name="message" id="input3" />
                                                            </p>

                                                            <p className='block'>
                                                                <label>Mensaje</label>
                                                                <textarea name="message" id="input4" rows="3"></textarea>
                                                            </p>
                                                            <p className='block'>
                                                                <button type="submit" value="Send">
                                                                    Enviar
                                                                </button>
                                                            </p>
                                                        </form>
                                                    </div>
                                                    <div className="contact-info">
                                                        <h2>Mas Info</h2>
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
                                                            React developer junior sin experiencia laboral, con muchas ganas de aprender y trabajar.
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