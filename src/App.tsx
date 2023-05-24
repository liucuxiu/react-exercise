import { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';


function App() {
  const [selectedCategory, setSelectedCategory] = useState('All-category')
  const [expenses, setExpense] = useState([
    { id: 1, description: 'Buy a book', amount: 10, category: 'Groceries' },
    { id: 2, description: 'Buy a milk', amount: 5, category: 'Utilities' },
    { id: 3, description: 'Buy a car', amount: 10000, category: 'Entertainment' },
    { id: 4, description: 'Buy a house', amount: 100000, category: 'Entertainment' },
    { id: 5, description: 'Buy a phone', amount: 1000, category: 'Utilities' },
    { id: 6, description: 'Buy a laptop', amount: 2000, category: 'Groceries' },
    { id: 7, description: 'Buy a table', amount: 100, category: 'Entertainment' },
  ])

  const visibleExpenses = selectedCategory !== 'All-category'
    ? expenses.filter(e => e.category === selectedCategory)
    : expenses

  return (
    <div className="App">
      <div className="mb-3">
        <ExpenseForm onSubmit={expense => setExpense([...expenses, { ...expense, id: expenses.length + 1 }])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpense(expenses.filter(e => e.id != id))}/>

    </div>
  )
}

export default App;