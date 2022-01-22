import React from "react";
import data from "./data";
import Card from "./card";
export default function Cards() {
  return (
    <div className="cards">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
