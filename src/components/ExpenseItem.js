import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Petrol';
    const expenseAmount = 100;
    const locationOfExpenditure = 'Surat';

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <h3>{locationOfExpenditure}</h3>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
        </div> 
    );
}

export default ExpenseItem;