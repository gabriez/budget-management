import {useEffect, useState} from 'react'
import ErrorMessage from './ErrorMessage';
import { randomID } from './helpers/helper';
import cerrarModal from '.././img/cerrar.svg'

const Modal = ({formAnimation, handleClose, setExpenses, edit, expenses}) => {
    const [spent, setSpent] = useState({
        spentName: '',
        quantity: 0,
        category: ''
    });

    const [errors, setErrors] = useState({
        spentName: false,
        quantity: false,
        category: false
    })

    useEffect(()=> {
        if (Object.keys(edit).length > 0) {
            setSpent({...edit})}
    }, [])

    const handleChanges = e => {
        const {name, value} = e.target;
        const numbersPattern = /^\d*(\.\d*)?$/;

        if (name === "quantity") {
            if (numbersPattern.test(value)) setSpent( prevState => ({...prevState, [name]: value[0] === "0" && value[1] !== '.'? value[1] : value}));
        } else setSpent( prevState => ({...prevState, [name]: value}));
    }
    

    
    const handleSubmit = e => {
        e.preventDefault();

        if ( Object.values(spent).includes('')) {
            
            let errorsIndex = Object.values(spent).map((item, index) => { if (item == ``) return index});
            let errorsKey = Object.keys(spent);
            setErrors({
                spentName: false,
                quantity: false,
                category: false
            });
            errorsIndex.forEach( item => {
                setErrors((prevState) => ({...prevState, [errorsKey[item]]: true}))
            });
            return; 
        } 

        setErrors({
            spentName: false,
            quantity: false,
            category: false
        });

        if (Object.keys(edit).length > 0){
            let updatedExpense = expenses.map( item => item.id !== edit.id ? item : {...spent, quantity: Number(spent.quantity) })
            setExpenses(updatedExpense);
        } else {
            setExpenses( prevState => [...prevState, {...spent, quantity: Number(spent.quantity), id: randomID(), date: Date.now() }] );
        }

        
        handleClose();
    }

    return (
        <div className='modal'>
            <div className="cerrar-modal">
                <img src={cerrarModal} alt="Cerrar modal" onClick={handleClose} />
            </div>
            <form className={`formulario ${formAnimation ? 'animar' : 'cerrar'}`} onSubmit={handleSubmit}>
                <legend >{Object.keys(edit).length > 0? "Editar Gasto" : "Nuevo gasto"}</legend>
                <div className='campo'>
                    <label htmlFor="spentName" >Nombre del gasto</label>
                    <input type="text" name="spentName" id="spentName"  value={spent.spentName} onChange={handleChanges}placeholder='Añade el nombre del gasto'/>
                    {errors.spentName && <ErrorMessage tipo={"error"}> Introduce un nombre para el gasto </ErrorMessage>}
                </div>
                <div className='campo'>
                    <label htmlFor="quantity" >Cantidad del gasto</label>
                    <input type="text" name="quantity" id="quantity"  value={spent.quantity === 0 ? '' : spent.quantity} onChange={handleChanges}placeholder='Añade la cantidad del gastó. Ejem: 300'/>
                    {errors.quantity && <ErrorMessage tipo={"error"}> Introduce una cantidad </ErrorMessage>}
                </div>
                <div className='campo'>
                    <label htmlFor="category" >Categoria</label>
                    <select name="category" id="category" value={spent.category} onChange={handleChanges}>
                        <option value="">--Seleccione una categoría--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="ocio">Ocio</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos variados</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                    {errors.category && <ErrorMessage tipo="error"> Selecciona una categoría </ErrorMessage>}
                </div>
                <input type="submit" value={Object.keys(edit).length > 0? "Guardar Cambios" : "Añadir Gasto"} />
            </form>
        </div>
    )
}

export default Modal
