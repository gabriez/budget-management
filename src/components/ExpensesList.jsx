import Expense from './partials/Expense'

const ExpensesList = ({expenses, deleteExpense, editExpense, filter}) => {


  const containerExpenses = (item) => {
    if (filter === ''){
      return (<Expense key={item.id} expense={item} deleteExpense={deleteExpense} editExpense={editExpense}/>)
    } else if (item.category === filter) {
      return (<Expense key={item.id} expense={item} deleteExpense={deleteExpense} editExpense={editExpense}/>)
    }
    
  }

  return (
    <div className='listado-gastos contenedor'>
      <h2>{Array.isArray(expenses) && expenses.map(containerExpenses)[0] !== undefined ? 'Gastos' : 'No ha agregado gastos'}</h2>
      {Array.isArray(expenses) ?? expenses.map(containerExpenses)}
    </div>
  )
}

export default ExpensesList
