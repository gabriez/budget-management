import {useState, useEffect} from 'react'

const Filters = ({filter, setFilter}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className="campo filtrar-flex">
            <label htmlFor="gastos">Filtrar gastos</label>
            <select name="gastos" id="gastos" value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="">--Seleccione una categoría--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="ocio">Ocio</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos variados</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default Filters
