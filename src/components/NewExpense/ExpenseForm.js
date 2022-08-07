import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) =>{
    const[enteredTitle,setEnteredTitle] =useState('')
    const[enteredAmount,setEnteredAmount] =useState('')
    const[enteredDate,setEnteredDate] =useState('')

    //Managing state using on useState call
    // const[userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
   const titleChangeHandler=(evt)=>{
        console.log("Title changed",evt.target.value)
        setEnteredTitle(evt.target.value)
        
        // setUserInput({...userInput,
        // enteredTitle:evt.target.value})

        //react will pass previous state here
        
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: evt.target.value}
        // })
    }

    const amountChangeHandler=(evt)=>{
        console.log('Amount changed',evt.target.value)
        setEnteredAmount(evt.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:evt.target.value
        // })
    }
    const dateChangeHandler=(evt)=>{
        console.log('Date Changed',evt.target.value)
        setEnteredDate(evt.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredDate:evt.target.value
        // })
    }

    const submitHandler=(event)=>{
        event.preventDefault()
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
    console.log(expenseData)

    props.onSaveExpenseData(expenseData)
    setEnteredAmount('')
    setEnteredDate('')
    setEnteredTitle('')
    }

return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                <label>Amount</label>
                <input type="text" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-01-01" max="2023-01-01" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
        </div>
        </div>
    </form>
}
export default ExpenseForm