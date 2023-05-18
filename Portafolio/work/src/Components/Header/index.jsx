import React from 'react'
import "./estilos.css"
import foto from "./../../Assets/Foto2.jpeg"
import img1 from "./../../Assets/img1.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faHtml5, faCss3, faGitAlt, faSass, faBootstrap,faGithub, faGit, faLinkedin}from'@fortawesome/free-brands-svg-icons'
import { faPeopleGroup, faLightbulb, faCode, faArrowTrendUp, faGear, faSun} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const cambiar  = (e) =>{
        const slider = document.querySelector(".container-all")

        if(slider){
            slider.classList?.remove("container-all")
            slider.classList?.add("container-all2")
        }

        const query = document.querySelector(".activo")

        if(query){
            query.classList?.remove("activo")
            e.target.classList?.add("activo")
        }
    }

    const volverAcambiar = (e) =>{
        const slider = document.querySelector(".container-all2")

        if(slider){
            slider.classList?.remove("container-all2")
            slider.classList?.add("container-all")
        }

        const query = document.querySelector(".activo")

        if(query){
            query.classList?.remove("activo")
            e.target.classList?.add("activo")
        }
    }
    return (
        <>
                {/*--Nombre Animacion-*/}
        <div className='descr'>
            <div className='Mi'>
                <h2>Lautaro Rodriguez</h2>
                <h3>Desarrollador front end</h3>

            </div>
        </div>
        <div className='container-buttons'>
            <button><FontAwesomeIcon className='iconoHeader' icon={faLinkedin}/></button>
            <button><FontAwesomeIcon className='iconoHeader' icon={faSun}/></button>
        </div>

        <div className='Container-header'>
        
        {/*--Header-*/}
    

        <header>
            <nav>
                <ul>
                    <a onClick={volverAcambiar} className='activo' href='#sobre'>Sobre Mi</a>
                    <a href='#habilidades' onClick={volverAcambiar}>Habilidades</a>
                    <a onClick={volverAcambiar} href='#tecnologias'>Tecnologias</a>
                    <a onClick={cambiar} href='#proyectos'>Proyectos</a>
                    <a onClick={volverAcambiar}>Contacto</a>
                </ul>
            </nav>
        </header>



        
        {/*--Info Personal--*/}

        <main className="container-all">
                <div id='sobre' className="slider-view">
                    <section className='contianer-info'>
                        <article className='article-p'>
                            <h2>Sobre Mi</h2>
                            <p>Hola, me presento. Mi nombre es Lautaro Rodriguez y soy un Desarrollador Junior en React. Me apasiona la programación, tanto en el Back End como en el Front End. Cuando haya perfeccionado mis habilidades en el Front End, comenzaré a trabajar en el Back End para convertirme en un programador Full Stack en el futuro.</p>
                    
                        </article>
                        
                        <article className='article-img'>
                            <img src={foto}/>
                        </article>
                        </section>
                </div>


                {/*--Habilidades-*/}

                <div id='habilidades' className="slider-view">
                    <section className='contianer-habilidades'>
                        <article className='habilidades'>
                            <div>
                                <FontAwesomeIcon className='iconoHabilidades' icon={faPeopleGroup}/>
                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tambien escuchar correciones para poder aprender.</p>
                            </div>

                            <div>
                                <FontAwesomeIcon className='iconoHabilidades' icon={faLightbulb}/>
                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tamb escuchar correciones.</p>
                            </div>

                            <div>
                                <FontAwesomeIcon className='iconoHabilidades' icon={faCode}/>
                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tamb escuchar correciones.</p>
                            </div>

                            <div>
                                <FontAwesomeIcon className='iconoHabilidades' icon={faArrowTrendUp}/>
                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tamb escuchar correciones.</p>
                            </div>

                            <div>
                                <FontAwesomeIcon className='iconoHabilidades' icon={faGear}/>
                                <p>Tengo la capacidad de trabajar en grupo de manera optima, tengo la voluntad y la pasion para poder brindar mi ayuda cuando se la necesite y tamb escuchar correciones.</p>
                            </div>
                        </article>
                    </section>
                </div>

                
                <div id='tecnologias' className="slider-view">
                    <section className='contianer-tecnologias'>
                        <article className='tecnologias'>

                            <div className='div'>
                                <FontAwesomeIcon className='icon html' icon={faHtml5}/>
                            </div>

                            <div className='div'>
                                        <FontAwesomeIcon className='icon' icon={faCss3}/>
                            </div>

                            <div className='div'>
                                    <FontAwesomeIcon className='icon' icon={faJs}/>
                            </div>

                            <div className='div'>
                                <FontAwesomeIcon className='icon' icon={faSass}/>
                            </div>

                            <div className='div'>
                                <FontAwesomeIcon className='icon' icon={faGit}/>
                            </div>

                            <div className='div'>
                                <FontAwesomeIcon className='icon' icon={faGithub}/>
                            </div>

                            <div className='div'>
                                        <FontAwesomeIcon className='icon' icon={faBootstrap}/>
                            </div>

                            <div className='div'>
                                <FontAwesomeIcon className='icon' icon={faReact}/>
                            </div>
                        </article>
                    </section>
                </div>



{/*--Proyectos-*/}
                <div id='proyectos' className="slider-view">
                    <section className='contianer-Proyectos'>
                        <article className='article'>
                            
                            <a href="https://practicando-con-css.vercel.app/" target='_blank'><img src={img1}/></a>
                            <div className='posicionh2'>
                                <h2>E-commerce</h2>
                            </div>
                            <div className='posicionp'>
                                <p>E-coomerce de autos el cual tiene almacenamiento dentro del localStorage, el cual tiene distintos autos en venta</p>
                            </div>
                                
                            <span>HTML, CSS, React</span>
                            
                        </article>

                        <article className='article'>
                            
                            <a href="https://practicando-con-css.vercel.app/" target='_blank'><img src={img1}/></a>
                            <div className='posicionh2'>
                                <h2>E-commerce</h2>
                            </div>
                            <div className='posicionp'>
                                <p>E-coomerce de autos el cual tiene almacenamiento dentro del localStorage, el cual tiene distintos autos en venta</p>
                            </div>
                                
                            <span>HTML, CSS, React</span>
                            
                        </article>

                        <article className='article'>
                            
                            <a href="https://practicando-con-css.vercel.app/" target='_blank'><img src={img1}/></a>
                            <div className='posicionh2'>
                                <h2>E-commerce</h2>
                            </div>
                            <div className='posicionp'>
                                <p>E-coomerce de autos el cual tiene almacenamiento dentro del localStorage, el cual tiene distintos autos en venta</p>
                            </div>
                                
                            <span>HTML, CSS, React</span>
                            
                        </article>

                        <article className='article'>

                            <a href="https://practicando-con-css.vercel.app/" target='_blank'><img src={img1}/></a>
                            <div className='posicionh2'>
                                <h2>E-commerce</h2>
                            </div>
                            <div className='posicionp'>
                                <p>E-coomerce de autos el cual tiene almacenamiento dentro del localStorage, el cual tiene distintos autos en venta</p>
                            </div>
                                
                            <span>HTML, CSS, React</span>
                            
                        </article>

                        </section>
                </div>



                
        </main>
        </div>
    </>
    )
}

export default Header