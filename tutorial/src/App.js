import Expenses from "./components/expenses/Expenses";
import React, { useState, useEffect } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";

let DUMMY_EXPENSE = [
  // {
  //   id: "e1",
  //   title: "school",
  //   amount: 500,
  //   date: new Date(2021, 5, 13),
  // },
  // {
  //   id: "e2",
  //   title: "school",
  //   amount: 500,
  //   date: new Date(2021, 5, 13),
  // },
  // {
  //   id: "e3",
  //   title: "school",
  //   amount: 500,
  //   date: new Date(2021, 5, 13),
  // },
  // {
  //   id: "e4",
  //   title: "school",
  //   amount: 500,
  //   date: new Date(2021, 5, 13),
  // },
];

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchData = () => {
    fetch("https://yexpense.herokuapp.com/api/v1/expenses/api/v1/expenses")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((res) => {
        setExpenses(res);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    fetch("https://yexpense.herokuapp.com/api/v1/create/expense", {
      method: `POST`,
      body: JSON.stringify(expense),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => {
        fetchData();
        return response.json();
      })
      .then(() => {});
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses item={expenses} />
    </div>
  );
};
export default App;
