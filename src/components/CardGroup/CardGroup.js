import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
  const items = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Iphone", price: 75000 },
    { id: 3, name: "Smart Watch", price: 15000 },
  ];
  return (
    <div>
      <h1>This is cards</h1>
      <div className="card-group">
        {items.map((item) => (
          <Card></Card>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
