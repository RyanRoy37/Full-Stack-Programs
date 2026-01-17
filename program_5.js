import React from "react";

class RegistrationForm extends React.Component {
  state = { name: "", email: "", password: "", errors: {} };

  validate = () => {
    const e = {};
    if (!this.state.name) e.name = "Name required";
    else if (this.state.name.length < 3) e.name = "Min 3 letters";

    if (!this.state.email) e.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(this.state.email)) e.email = "Invalid email";

    if (!this.state.password) e.password = "Password required";
    else if (this.state.password.length < 8) e.password = "Min 8 letters";

    this.setState({ errors: e });
    return Object.keys(e).length === 0;
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    if (this.validate())
      this.setState({ name: "", email: "", password: "", errors: {} }, 
        () => alert("Form submitted"));
  };

  render() {
    const { name, email, password, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Registration Form</h2>

        <input name="name" value={name} placeholder="Name" onChange={this.handleChange} />
        <div>{errors.name}</div>

        <input name="email" value={email} placeholder="Email" onChange={this.handleChange} />
        <div>{errors.email}</div>

        <input name="password" type="password" value={password}
               placeholder="Password" onChange={this.handleChange} />
        <div>{errors.password}</div>

        <button>Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
