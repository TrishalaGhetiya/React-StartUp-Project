import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('clicked!!!');
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails 
            title={props.title} 
            locationOfExpenditure={props.locationOfExpenditure} 
            amount={props.amount} 
            />
            <button onClick={clickHandler}>Delete</button>
        </Card> 
    );
}

export default ExpenseItem;