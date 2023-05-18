import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane, faMessage} from "@fortawesome/free-solid-svg-icons"
import "./estilos.css"
import foto from "./../../Assets/Foto2.jpeg"
const Asistant = () => {

    const [estado, setEstado] = useState(false)

    const OPENAI_API_KEY = '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';
    const DEFAULT_MESSAGE =       "Respondeme las preguntas que te voy hacer como si le preguntaran a la pregunta que te estoy describiendo.Respuestas cortas, sencillas y no saludes. Eres Lautaro, tienes 19 años, vives en la provincia de Córdoba, Argentina y eres un programador Front-end Junior sin experiencia laboral. Lautaro emprendió el camino del Front-end en junio del 2022 en la carrera de Front-end en Coder House y la terminó en febrero del 2023. Ahora estudia de manera autodidacta, practicando todos los días con nuevas ideas y proyectos para perfeccionar cada vez más React JS, Javascript, CSS y HTML con nuevos proyectos. También estás aprendiendo inglés; comenzaste con el inglés del colegio, pero tenías ganas de aprender y decidiste comenzar una academia de inglés llamada Highland en julio del 2022, a la cual sigues asistiendo, ya que tu meta es poder hablar y entender fluidamente el inglés. Para complementar, empezaste un nuevo curso en mayo del 2023 de inglés que irá a la par de la academia HighLane. Ese curso es la nueva English Academy de Coder House en el nivel Intermediate. Eres una persona amable, muy sociable, muy responsable, con muchas cosas que aprender, pero sin miedo al camino del aprendizaje, sino muy emocionado. En caso de que alguien solicite tu ayuda, lo asistirás con todo lo que puedas. Cuando perfecciones el área de Front-end, comenzarás a estudiar el área de Backend para convertirte en un desarrollador Full Stack muy competente y con muchas habilidades.Recuerda respuestas cortas y simples. No saludes, se breve.Estoy en busca de primer trabajo como desarrollador front end o react developer. Tenes conocimientos de HTML, CSS, Javascript, React JS, GIT, GitHub, Sass, Bootstrap La manera de contactarte puede ser por Linkedin: https://www.linkedin.com/in/lautaro-rodriguez-o-valle-501a55263, Telefono: +54 351 3701, Emali: lautarorodriguezovalle@gmail.com.En caso de que te envien un mensaje de agradecimiento como por ejemplo gracias diras fue un placer poder ayudarte! nada mas. En caso de que te digan que buscas? o que andas buscando? responde que busco trabajo y estoy muy emocionado por aprender nuevas cosas y emprender mi camino como Front End. En caso de que te pregunten quien eres tu responderas con Soy lautaro, un programador Front-end Junior sin experiencia laboral que busca su primer empleo.";
    const [chat, setChat] = useState([
        {
            id: '1',
            type: 'bot',
            text: '¡Hola! ¿En qué puedo ayudarte?',
        },
        ]);

    
        const [input, setInput] = useState('');
    
        const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!input) return;
    
        setInput('');
        const newMessage = {
            id: String(Date.now()),
            type: 'user',
            text: input,
        };

        setChat((chat) => [...chat, newMessage]);

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'Eres un asistente útil.' },
                { role: 'user', content: `${DEFAULT_MESSAGE} ${input}`}
            ],
            }),
        });
        const data = await response.json();
        const aiReply = data.choices[0].message.content;

            const newReply = {
                id: String(Date.now()),
                type: 'bot',
                text: aiReply,
            };

        
            setChat((chat) => [...chat, newReply]);

        

        
    };

    const cambiarEstado = (e) =>{
        e.preventDefault()
        const chat = document.querySelector(".Chat2")
        const chatGrid = document.querySelector(".ChatGrid2")


        if(chat && chatGrid){
            chat.classList?.remove("Chat2")
            chatGrid.classList?.remove("ChatGrid2")
    
            chat.classList?.add("chat")
            chatGrid.classList?.add("chatGrid")
        }


        setTimeout(()=>{
            setEstado(true)
        },500)
    }


    const cambiarEstado2 = (e) =>{
        e.preventDefault()
        const chat = document.querySelector(".chat")
        const chatGrid = document.querySelector(".chatGrid")

        if(chat && chatGrid){
            chat.classList?.remove("chat")
            chatGrid.classList?.remove("chatGrid")
    
    
            chat.classList?.add("Chat2")
            chatGrid.classList?.add("ChatGrid2")
        }

        setTimeout(()=>{
            setEstado(false)
        },500)
    }
    return (
    <>
    {
        estado === false
        ?

            <button className='open' onClick={cambiarEstado}><FontAwesomeIcon className='iconOpen' icon={faMessage}/></button>
        :
        <>
    <div className='chatGrid'>
        <div>
            <img src={foto}/>
        </div>

        <div className='divName'>
            Lautaro Rodriguez
            <p>En Linea</p><div></div>
        </div> 
    </div>
    <button onClick={cambiarEstado2} className='ButtonX'>x</button>   
    <div className="chat">
        
        <div className="chat-container">
            {chat.map((message) => (
            <div key={message.id} className={`message ${message.type}`}>
                {message.text}

            </div>
            ))}
        </div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Haz una pregunta..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className='buttonSend' type='submit'><FontAwesomeIcon className='icono' icon={faPaperPlane} /></button>
            </form>
        </div>
        </>
    }
    
        </>
    );
};


export default Asistant