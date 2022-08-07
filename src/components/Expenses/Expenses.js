
import { useState } from 'react'
import Card from './Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
const Expenses = (props) =>{

  const [filteredYear,setFilteredYear] = useState('2021')

  const filterChangeHandler = (selectedYear) =>
  {
      console.log('Expenses form Year selected =',selectedYear)
      setFilteredYear(selectedYear)
  }

const filteredArray = props.items.filter(exp=> {return exp.date.getFullYear().toString() === filteredYear})
return(
 <div>
  
 <Card className="expenses">
   <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
   
   

{filteredArray.length === 0 && <p>No data found</p>}   
{filteredArray.length >0 && 
      filteredArray.map(exp => 
      <ExpenseItem
                key={exp.id}
                title={exp.title} 
                  amount={exp.amount} 
                  date={exp.date}/>
      )

   }
   {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
   <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
   <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>  */}
</Card>
</div>
)
}

export default Expenses