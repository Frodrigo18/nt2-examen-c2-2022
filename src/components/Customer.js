import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const url = "http://127.0.0.1:3001/api/customers/";

const Customer = (props) => {
  const [clientes, setClientes] = useState([]);
  const cliente = null;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      response.json().then((data) => {
        setClientes(data);
      });
    }

    fetchData();

    cliente = clientes.filter((cliente) => cliente.email === props.email);
  }, []);

  return (
    <div>
      <h2>name = {cliente.name}</h2>
      <h2>address = {cliente.address}</h2>
      <h2>birthdate = {cliente.birthdate}</h2>
      <h2>email = {cliente.email}</h2>
      <h2>Acountos =</h2>
      {cliente.acounts.map((acount) => (
        <h3>{acount}</h3>
      ))}
    </div>
  );
};
export default Customer;
