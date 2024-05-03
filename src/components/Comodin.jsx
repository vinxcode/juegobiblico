import React from 'react'
import { useState } from 'react'

const Comodin = ({ name }) => {

const [estado1, setEstado1] = useState("")
const [estado2, setEstado2] = useState("")

  return (
    <tr>
        <td className="px-10 py-2">{ name }</td>
        <td className="text-3xl text-center" onClick={() => setEstado1("X")}>{estado1}</td>
        <td className="text-3xl text-center" onClick={() => setEstado2("X")}>{estado2}</td>
    </tr>
  )
}

export default Comodin