import { useState } from 'react'
import Comodines from './Comodines'
import preguntas from './preguntas'

function App() {
  const [mostrarPregunta, setMostrarPregunta] = useState(false)
  const [numeroPregunta, setNumeroPregunta] = useState(-1)
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false)
  const [estadosPreguntas, setEstadosPreguntas] = useState(preguntas.map((pregunta) => ({
    contenido: "", color: "bg-green-500", hover: "hover:bg-green-600",
    pregunta: pregunta.pregunta, respuesta: pregunta.respuesta
  })))

  const convertirX = (index) => {
    setEstadosPreguntas((estadosPreguntas) => {
      const nuevosEstados = [...estadosPreguntas]
      nuevosEstados[index] = {
        contenido: nuevosEstados[index].contenido === "" ? "X" : "",
        color: nuevosEstados[index].contenido === "" ? "bg-red-400" : "bg-green-500",
        hover: nuevosEstados[index].contenido === "" ? "hover:bg-red-500" : "bg-green-600",
        pregunta: estadosPreguntas[index].pregunta,
        respuesta: estadosPreguntas[index].respuesta,
      }
      return nuevosEstados
    })
    setMostrarPregunta(true)
    setNumeroPregunta(index)
  }

  const mostrarLaRespuesta = () => {
    if(!mostrarRespuesta){
      setMostrarRespuesta(true)
    } else{
      setMostrarRespuesta(false)
      setMostrarPregunta(false)
    }
  }

  return (
    <div className='flex flex-col font-tilt'>
      <h1 className='text-center font-black text-6xl mt-10 text-white'>JUEGO BÍBLICO</h1>
      <div className='flex flex-col justify-center items-center'>
        <section className='mx-auto w-[1800px] mt-10 grid grid-cols-12 gap-3 relative'>
          {
            preguntas.map((pregunta, index) => (
              <article key={index}
                onClick={() => convertirX(index)}
                className={`${estadosPreguntas[index].color}
              h-[150px] flex flex-col justify-center align-center rounded-2xl
            ${estadosPreguntas[index].hover} cursor-pointer shadow-lg  solid border-white border-8`}
              >
                <p className='text-center font-black text-5xl text-white h-[30px]'>{estadosPreguntas[index].contenido === "" ? pregunta.idPregunta : "X"}</p>

              </article>
            ))
          }
        </section>
        {
            mostrarPregunta && (
              <div className='absolute w-[1000px] flex flex-col justify-center items-center bg-gray-100 p-10 gap-4 rounded-2xl shadow-2xl'>
                <h1 className='text-center text-5xl'>{estadosPreguntas[numeroPregunta].pregunta}</h1>
                {
                  mostrarRespuesta && (
                    <h2 className='text-4xl text-purple-600 italic'>Respuesta: {estadosPreguntas[numeroPregunta].respuesta}</h2>
                  )
                }
                <button onClick={mostrarLaRespuesta}
                className={`px-10 py-5 ${ mostrarRespuesta ? "bg-red-400" : "bg-purple-500"} text-xl text-white rounded-xl ${ mostrarRespuesta ? "hover:bg-red-500" : "hover:bg-purple-600"}`}
                >{ mostrarRespuesta ? "CERRAR" : "Mostrar respuesta"}</button>
              </div>
            )
          }
      </div>

      <Comodines />

    </div>
  )
}

export default App