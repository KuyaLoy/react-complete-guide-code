import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {

    return(
        
        <Card className="expenses">
            <ExpenseItem key={props.expense[0].id} title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date} />
            <ExpenseItem key={props.expense[1].id} title={props.expense[1].title} amount={props.expense[1].amount} date={props.expense[1].date} />
            <ExpenseItem key={props.expense[2].id} title={props.expense[2].title} amount={props.expense[2].amount} date={props.expense[2].date} />
            <ExpenseItem key={props.expense[3].id} title={props.expense[3].title} amount={props.expense[3].amount} date={props.expense[3].date} />
        </Card>
        
    );

}

export default Expenses;