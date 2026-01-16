import React from "react";

const data = [
  { slno: 1, name: "stud1", usn: "rvce1", tmarks: 150 },
  { slno: 2, name: "stud2", usn: "rvce2", tmarks: 145 }
];

class StudentListTable extends React.Component {
  state = { list: [] };

  componentDidMount() {
    setTimeout(() => this.setState({ list: data }), 5000);
  }

  addStudent = e => {
    e.preventDefault();
    const f = e.target;
    this.setState({
      list: [...this.state.list, {
        slno: this.state.list.length + 1,
        name: f.name.value,
        usn: f.usn.value,
        tmarks: f.tmarks.value
      }]
    });
    f.reset();
  };

  render() {
    return (
      <>
        <table border="1">
          <tr>
            <th>Sl No</th><th>Name</th><th>USN</th><th>Total Marks</th>
          </tr>
          {this.state.list.map(s => (
            <tr key={s.slno}>
              <td>{s.slno}</td>
              <td>{s.name}</td>
              <td>{s.usn}</td>
              <td>{s.tmarks}</td>
            </tr>
          ))}
        </table>

        <hr />

        <form onSubmit={this.addStudent}>
          <input name="name" placeholder="Name" />
          <input name="usn" placeholder="USN" />
          <input name="tmarks" placeholder="Marks" />
          <button>Add</button>
        </form>
      </>
    );
  }
}

export default StudentListTable;
