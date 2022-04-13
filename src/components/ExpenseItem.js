import './ExpenseItem.css';
function ExpenseItem(){
    const expenseDate=new Date(2022, 2, 1);
    const expenseTitle="Condom";
    const expenseAmmount=295;

    return(
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmmount}</div>
            </div>
        </div>

    );
}

export default ExpenseItem;