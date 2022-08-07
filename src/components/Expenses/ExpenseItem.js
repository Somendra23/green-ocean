import React, {useState} from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card  from './Card'


const ExpenseItem = (props)=>{
    let [title,setTitle] = useState(props.title)
    const handleOnTitleChange=(event)=>{
    console.log('button clicked',event.target.name)
    setTitle("Bingo!!")
 }
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        {/* <div>{props.date.toISOString()}</div> */}
        <div className="expense-item__description">{title}</div>
        <div className="expense-item__price">${props.amount}</div>
    <button name="TitleChange" onClick={handleOnTitleChange}>Change Title</button>
    </Card>
)}
export default ExpenseItem