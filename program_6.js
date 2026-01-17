const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let inventory = [
  { id: 1, prodname: "prod1", qty: 12, price: 12 },
  { id: 2, prodname: "prod2", qty: 1,  price: 13 },
  { id: 3, prodname: "prod3", qty: 10, price: 14 },
  { id: 4, prodname: "prod4", qty: 19, price: 16 }
];

app.get("/", (req, res) => res.json(inventory));

app.post("/add", (req, res) => {
  inventory.push(req.body);
  res.json(inventory);
});

app.listen(8000, () =>
  console.log("Server running at http://localhost:8000")
);




import React, { useEffect, useState } from "react";
import axios from "axios";

/* DISPLAY INVENTORY */
export function Display_Inventory() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000").then(res => setList(res.data));
  }, []);

  return (
    <>
      <h2>Inventory</h2>
      <table border="1">
        <tr>
          <th>ID</th><th>Name</th><th>Qty</th><th>Price</th>
        </tr>
        {list.map(i => (
          <tr key={i.id}>
            <td>{i.id}</td><td>{i.name}</td>
            <td>{i.qty}</td><td>{i.price}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

/* ADD INVENTORY */
export function AddInventory() {
  const [item, setItem] = useState({ id: "", name: "", qty: "", price: "" });

  const submit = () => {
    axios.post("http://localhost:8000/add", item)
      .then(() => alert("Item Added"));
  };

  return (
    <>
      <h2>Add Inventory</h2>
      <input placeholder="ID" onChange={e => setItem({ ...item, id: e.target.value })} />
      <input placeholder="Name" onChange={e => setItem({ ...item, name: e.target.value })} />
      <input placeholder="Qty" onChange={e => setItem({ ...item, qty: e.target.value })} />
      <input placeholder="Price" onChange={e => setItem({ ...item, price: e.target.value })} />
      <button onClick={submit}>Add</button>
    </>
  );
}
