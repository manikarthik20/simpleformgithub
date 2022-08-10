import React, { Component } from "react";

export class SiginIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      users: [],
    };
    this.changeName = this.changeName.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeName = (event) => {
    this.setState({ name: event.target.value });
  };
  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
     event.preventDefault();
    fetch("http://localhost:3000/users?name="+this.state.name)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      if(result.length>0){
       localStorage.setItem("uname",this.state.name);
        alert("login successfull"+this.state.name)
        window.location.replace("/");
      }else{
        alert("Please check your username ");
      }
    });
  };
  render() {
    return (
      <form>
        <div className="container">
          <h1>User Login Form</h1>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.changeName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="form-label">PassWord</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.changePassword}
              className="form-control"
            />
            <br />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    );
  }
}

export default SiginIn;
