import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Modal from './components/Modal';
import ExpensesList from './components/ExpensesList';
import Filters from './components/partials/Filters';
import IconoAgregarGastos from './img/nuevo-gasto.svg'



function App() {
  const budgetLocal = Number(JSON.parse(localStorage.getItem('budget')));
  const expensesLocal = JSON.parse(localStorage.getItem('expenses'));

  const [budget, setBudget] = useState(budgetLocal || 0 );
  const [validBudget, setValidBudget] = useState(false);
  
  const [expenses, setExpenses] = useState(expensesLocal  || []);
  const [filter, setFilter] = useState('');

  const [modal, setModal] = useState(false);
  const [formAnimation, setFormAnimation] = useState(false);

  const [edit, setEdit] = useState({});

  const openModal = () => {
    setModal(true);
    setTimeout(() => {
      setFormAnimation(true);
    }, 500);
    setEdit({});
  }

  const editExpense = (expense) => {
    openModal();
    setEdit({...expense});
  }

  const deleteExpense = (id) => {
    let deletedExpense = expenses.filter(item => item.id != id);

    setExpenses([...deletedExpense]);
  }

  const handleClose = () => { 
    setFormAnimation(false);
    setTimeout(() => {
        setModal(false);
    }, 500);     
    setEdit({});
}


  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget));
  }, [budget])

  useEffect(()=> {
    if (budgetLocal > 0) setValidBudget(true);
  }, [])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
      budget={budget} 
      setBudget={setBudget} 
      setValidBudget={setValidBudget} 
      validBudget={validBudget} 
      expenses={expenses}
      setExpenses={setExpenses} />

      {validBudget && (
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter} />
            <ExpensesList expenses={expenses} editExpense={editExpense} deleteExpense={deleteExpense} filter={filter}/>
          </main>
          <div className='nuevo-gasto' onClick={openModal}>
            <img src={IconoAgregarGastos} alt="Agrega tus gastos" />
          </div>
        </>
      )}

      {modal && 
        <Modal setModal={setModal} setFormAnimation={setFormAnimation} 
        formAnimation={formAnimation}  setExpenses={setExpenses} expenses={expenses}
        edit={edit} handleClose={handleClose}/>
        }
    </div>
  )
}

export default App
