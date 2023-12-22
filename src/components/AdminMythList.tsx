import React, { Component } from "react";
import AdminNavbar from "./AdminNavbar";

interface Myths {
  mythId: number;
  mythDesc: string;
  factDesc: string;
  source: string;
}

class AdminMythList extends Component<Myths> {
  items = [
    {
      mythId: 1,
      mythDesc: "Abc",
      factDesc: "abs",
      source: "nowhere",
    },
    {
      mythId: 2,
      mythDesc: "Abc",
      factDesc: "abs",
      source: "nowhere",
    },
    {
      mythId: 3,
      mythDesc: "Abc",
      factDesc: "abs",
      source: "nowhere",
    },
  ] as Myths[];

  state = {
    mythId: 3,
    mythDesc: "Abc",
    factDesc: "abs",
    source: "nowhere",
  } as Myths;

  handleAddMyths = () => {
    this.setState((prevState) => ({
      newFood: {
        mythId: 0,
        mythDesc: "Food A",
        factDesc: 0,
        source: "",
      },
    }));
  };

  render() {
    return (
      <div>
        <AdminNavbar></AdminNavbar>
        <button type="button" onClick={this.handleAddMyths}>
          Register Myths
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Myth ID</th>
              <th>Myth Desc</th>
              <th>Fact Desc</th>
              <th>Source</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.items.map((oneMyths) => {
              return (
                <tr key={oneMyths.mythId}>
                  <td>{oneMyths.mythId}</td>
                  <td>{oneMyths.mythDesc}</td>
                  <td>{oneMyths.factDesc}</td>
                  <td>{oneMyths.source}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminMythList;
