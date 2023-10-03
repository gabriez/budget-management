import React from 'react'

const ManageBudget = ({budget}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>La grafica va aqui</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span>${budget}
            </p>
        </div>
    </div>
  )
}

export default ManageBudget
