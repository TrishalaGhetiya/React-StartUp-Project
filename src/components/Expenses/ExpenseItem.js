import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
    const [amount, setAmount] = useState(props.amount);

    const clickHandler = () => {
        setAmount('100$');
        console.log(amount);
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails 
            title={props.title} 
            locationOfExpenditure={props.locationOfExpenditure} 
            amount={amount} 
            />
            <button onClick={clickHandler}>Change Expense</button>
        </Card> 
    );
}

export default ExpenseItem;