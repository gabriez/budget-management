import React from 'react'

const NewBudget = ({budget, setBudget, setValidBudget}) => {

    const handleChange = e => {
        const {value} = e.target;
        const numbersPattern = /^\d*(\.\d*)?$/;
        if (numbersPattern.test(value)) setBudget(value[0] === "0" ? value[1] : value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        setBudget(prevState => Number(prevState))
        setValidBudget(true);

    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handleSubmit}>
                <div className='campo'>
                    <label htmlFor="budget">Define tu presupuesto</label>
                    <input type="text" name="budget" 
                    id="budget" 
                    className="nuevo-presupuesto" 
                    placeholder='Ingresa tu presupuesto'
                    value={budget}
                    onChange={handleChange}
                    />
                </div>
                <input type="submit" value="Añadir" />
            </form>
        </div>
    )
}

export default NewBudget
