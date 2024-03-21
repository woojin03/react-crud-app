import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import React from 'react';

export const ExpenseList = ({initialExpenses, handleDelete}) => {
  if (!initialExpenses) {
    initialExpenses = [];
  } 

  return (
    <React.Fragment>
      <ul className='list'>
        {initialExpenses.map(expense => {
          if (expense) {
            return (
              <ExpenseItem key={expense.id} expense={expense}
              handleDelete={handleDelete}
              />
            )
          } else {
            return null;
          }
        })}
      </ul>
      <button className='btn'>
        목록 지우기
      </button>
    </React.Fragment>
  )
}

export default ExpenseList
