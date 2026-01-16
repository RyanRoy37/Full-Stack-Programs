import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => <h1>Resume Details</h1>;

const PersonInfo = () => (
  <div>
    Name: <b>Prashanth K</b><br/>
    Address: Kengeri<br/>
    Phone: 1234567890<br/>
    Email: prashanthk@rvce.edu.in
  </div>
);

const Education = () => {
  const data = [
    { id: 1, name: "National Public School", place: "Bengaluru", edu: "10th", grade: "A+" },
    { id: 2, name: "Indian Institute of Science", place: "Bengaluru", edu: "Under Graduate", grade: "9.8" }
  ];

  return (
    <table border="1">
      <tr>
        <th>ID</th><th>Name</th><th>Place</th><th>Education</th><th>Grade</th>
      </tr>
      {data.map(e => (
        <tr key={e.id}>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.place}</td>
          <td>{e.edu}</td>
          <td>{e.grade}</td>
        </tr>
      ))}
    </table>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <PersonInfo />
    <Education />
  </>
);
