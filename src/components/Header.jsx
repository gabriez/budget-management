import React from 'react'
import NewBudget from './NewBudget'
import ManageBudget from './ManageBudget'

const Header = ({budget, setBudget, validBudget, setValidBudget}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

      
        {validBudget ? 
            (<NewBudget budget={budget} setBudget={setBudget} setValidBudget={setValidBudget}/>):
            (<ManageBudget budget={budget} setBudget={setBudget}/>)
        }
    </header>
  )
}

export default Header
