import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:5000/employees";

export default function App() {
  const [list, setList] = useState([]);
  const [emp, setEmp] = useState(null);

  useEffect(() => { load(); }, []);

  const load = async () =>
    setList((await axios.get(URL)).data);

  const save = async e => {
    e.preventDefault();
    emp.id ? await axios.put(`${URL}/${emp.id}`, emp)
           : await axios.post(URL, emp);
    setEmp(null); load();
  };

  const del = async id => {
    await axios.delete(`${URL}/${id}`);
    load();
  };

  if (emp)
    return (
      <form onSubmit={save}>
        <input name="firstName" value={emp.firstName}
          onChange={e => setEmp({ ...emp, firstName: e.target.value })} />
        <input name="lastName" value={emp.lastName}
          onChange={e => setEmp({ ...emp, lastName: e.target.value })} />
        <input name="email" value={emp.email}
          onChange={e => setEmp({ ...emp, email: e.target.value })} />
        <button>Save</button>
        <button type="button" onClick={() => setEmp(null)}>Cancel</button>
      </form>
    );

  return (
    <>
      <h2>Employees</h2>
      <button onClick={() => setEmp({ firstName:"", lastName:"", email:"" })}>
        Add
      </button>
      <table border="1">
        <tr>
          <th>First</th><th>Last</th><th>Email</th><th>Action</th>
        </tr>
        {list.map(e => (
          <tr key={e.id}>
            <td>{e.firstName}</td>
            <td>{e.lastName}</td>
            <td>{e.email}</td>
            <td>
              <button onClick={() => setEmp(e)}>Edit</button>
              <button onClick={() => del(e.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
