import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () =>  {
  const expenses = [
  {
    id: 'e1',
    title: 'Petrol',
    amount: 100,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: 'Surat'
  },
  {
    id: 'e2',
    title: 'Food',
    amount: 500,
    date: new Date(2021, 5, 23),
    locationOfExpenditure: 'Bombay'
  },
  {
    id: 'e3',
    title: 'Books',
    amount: 1000,
    date: new Date(2022, 4, 21),
    locationOfExpenditure: 'Kolkata'
  },
  {
    id: 'e4',
    title: 'Burger',
    amount: 200,
    date: new Date(2021, 2, 30),
    locationOfExpenditure: 'Surat'
  },
]
const addExpenseHandler = expense => {
  console.log(expense);
  expenses.push(expense);
}

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
