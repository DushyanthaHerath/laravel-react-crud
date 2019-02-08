import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

class Master extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">KindHub</a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/add-student">CreateStudent</Link></li>
              <li><Link to="/display-students">DisplayStudent</Link></li>
            </ul>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Master;