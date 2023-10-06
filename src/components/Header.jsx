import React from 'react'
import NewBudget from './NewBudget'
import ManageBudget from './ManageBudget'

const Header = ({
    budget,
    setBudget,
    validBudget,
    setValidBudget,
    expenses, 
    setExpenses

    }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

      
        {!validBudget ? 
            (<NewBudget budget={budget} setBudget={setBudget} setValidBudget={setValidBudget}/>):
            (<ManageBudget budget={budget} setBudget={setBudget} expenses={expenses}
                setExpenses={setExpenses} setValidBudget={setValidBudget}
                />)
        }
    </header>
  )
}

export default Header
