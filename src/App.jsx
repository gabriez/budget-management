import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [budget, setBudget] = useState(0);
  const [validBudget, setValidBudget] = useState(true)

  return (
    <>
      <Header budget={budget} setBudget={setBudget} setValidBudget={setValidBudget} validBudget={validBudget} />
    </>
  )
}

export default App
