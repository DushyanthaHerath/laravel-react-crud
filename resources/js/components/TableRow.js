import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.firstname}
          </td>
          <td>
            {this.props.obj.lastname}
          </td>
          <td>
            {this.props.obj.gender}
          </td>
          <td>
            {this.props.obj.class_room}
          </td>
          <td>
            {this.props.obj.teacher}
          </td>
          <td>
            {this.props.obj.joined_year}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;