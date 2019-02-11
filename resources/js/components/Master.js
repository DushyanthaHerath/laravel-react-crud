import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

class Master extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">KindHub</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/add-student">CreateStudent</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/display-students">DisplayStudent</Link></li>
                </ul>
            </div>
        </nav>
        <div className="col-md-12">
            {this.props.children}
        </div>
      </div>
    )
  }
}
export default Master;