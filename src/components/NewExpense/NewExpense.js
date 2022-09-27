import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const onSaveExpeseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpese(expenseData);
    }

    return (
        <div className='new-expense'>
        
            <ExpenseForm onSaveExpeseData={onSaveExpeseDataHandler} />

        </div>
    );
}

export default NewExpense;