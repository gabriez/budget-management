import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import { formatBudget } from './helpers/helper';


const ManageBudget = ({budget, expenses, setExpenses, setBudget, setValidBudget}) => {
    const [disponible, setDisponible] = useState(0);
    const [flatExpense, setFlatExpense] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const resetApp = () => {
        setExpenses([]);
        setBudget(0);
        setValidBudget(false);
    } 
    
    
    useEffect(() => {
        const flatenedExpense = expenses.reduce((acumulator, current) => acumulator + current.quantity, 0);
        const calcPercentage = ((flatenedExpense * 100)/budget).toFixed(2);
        setDisponible(budget - flatenedExpense);
        setFlatExpense(flatenedExpense);

        setTimeout(() => {
            setPercentage(calcPercentage);
        }, 500)
    }, [expenses])

    return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar styles={buildStyles({
                pathColor: percentage <= 100 ? '#3B82F6' : '#DC2626',
                trailColor: '#F5F5F5',
                textColor: percentage <= 100 ? '#3B82F6' : '#DC2626',
            })} value={percentage} text={`${percentage}% Gastado`} />
        </div>
        <div className="contenido-presupuesto">
            <button type="button" className="reset-app" onClick={resetApp}>
                Resetea la APP
            </button>
            <p>
                <span>Presupuesto: </span>{formatBudget(budget)}
            </p>
            <p>
                <span className={disponible < 0 ? 'negativo' : ''}>Disponible: </span>{formatBudget(disponible)}
            </p>
            <p>
                <span>Gastado: </span>{formatBudget(flatExpense)}
            </p>
        </div>
    </div>
)
}

export default ManageBudget
