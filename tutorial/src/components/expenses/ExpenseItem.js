import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card.js";

const ExpenseItem = (props) => {
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={new Date(props.date)} />
      <div className="expense-item-description">
        <h2> {props.title}</h2>
        <div className="expense-item-price">${props.ammount}</div>
      </div>

    </Card>
  );
};
export default ExpenseItem;
