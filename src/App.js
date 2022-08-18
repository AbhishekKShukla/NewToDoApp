import React, { Component } from "react";
import "./App.css";
import Plan from "./Plan";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  state = {
    items: [],
    text: "",
  };
  onHandleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  onHandleAdd = (e) => {
    if (this.state.items !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };
  handleDelete = id => {
    const OldItems=[...this.state.items];
    const items=OldItems.filter((element,i)=>{
      return i!==id
    });
    this.setState({items:items});
  }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p3">
            <h1 className="text-center">Today's Plan</h1>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write text here"
                  value={this.state.text}
                  onChange={this.onHandleChange}
                />
              </div>
              <div className="col-2">
                <button
                  className="btn btn-warning px-5 font-wight-bold"
                  onClick={this.onHandleAdd}
                >
                  Add
                </button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {this.state.items.map((value, i) => {
                    return <Plan key={i} value={value} id={i} sendData={this.handleDelete} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
