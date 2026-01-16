const express = require("express");
const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

const show = (t, d) =>
  `<p>Name: <b>${d.name}</b></p>
   <p>Branch: <u>${d.branch}</u></p>
   <p>Semester: ${d.semester}</p>
   <a href="/">Back</a>`;

app.get("/get", (req, res) => res.send(show("GET", req.query)));
app.post("/post", (req, res) => res.send(show("POST", req.body)));

app.listen(3000, () => console.log("http://localhost:3000"));
