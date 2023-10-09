import ExpenseItem from './components/ExpenseItem';

function App() {
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        locationOfExpenditure={expenses[0].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        locationOfExpenditure={expenses[1].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        locationOfExpenditure={expenses[2].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        locationOfExpenditure={expenses[3].locationOfExpenditure}
      ></ExpenseItem>
    </div>
  );
}

export default App;
