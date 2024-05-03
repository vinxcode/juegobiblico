import Comodin from "./Comodin"

const Comodines = () => {

    return (
        <div className="mx-auto w-1/3 text-xl mt-[50px] flex flex-col font-tilt px-[35px] py-[20px] bg-gray-200 rounded-3xl">
            <table className="">
                <thead className="">
                    <tr>
                        <th className="p-3">Comodin</th>
                        <th className="p-3">Equipo 1</th>
                        <th className="p-3">Equipo 2</th>
                    </tr>
                </thead>
                <tbody>
                    <Comodin name="Cambio de pregunta"/>
                    <Comodin name="Buscar en la biblia"/>
                    <Comodin name="preguntar al publico"/>
                    <Comodin name="X2"/>
                    <Comodin name="+2"/>
                    <Comodin name="-2"/>

                </tbody>
            </table>
        </div>
    )
}

export default Comodines