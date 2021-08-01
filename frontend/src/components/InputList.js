// import InputVar from "./InputVar";

import React from "react";
import { Link } from "react-router-dom";

function FormInputs(props) {
  return (
    <div>
      <h3>Place List</h3>
      <div className="container bg-dark">
      <table className="table table-striped">
        <tbody>
          {props.data.map((list) => (
            <tr key={list.id}>
              <td>
                <Link
                  key={list.id}
                  className="list-group-item list-group-item-action flex-column align-items-start"
                  to={`/place/${list.id}`}
                >
                  <strong style={{ fontSize: "20px" }}>{list.name} </strong>-{" "}
                  {list.country}
                </Link>
              </td>
              <td>
                <button
                  onClick={props.handleClick.bind(this, list.id)}
                  type="submit"
                  className="btn btn-danger"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default FormInputs;
