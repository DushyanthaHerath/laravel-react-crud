import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';
import Paginate from './Paginate';

class DisplayStudents extends Component {
    constructor(props) {
        super(props);
        this.handleDataChange=this.handleDataChange.bind(this);
        this.state = {value: '', items: '', pagination: ''};
    }
    handleDataChange(data) {
        this.setState({items:data.data, pagination:data.links});
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/students')
        .then(response => {
            this.handleDataChange(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    tabRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map(function (object, i) {
                return <TableRow obj={object} key={i} />;
            })
        }
    }
    pagination() {
        if(this.state.pagination instanceof Object) {
            return <Paginate obj={this.state.pagination} handler={this.handleDataChange} />;
        }
    }

    render() {
        return (
                <div>
                    <h1>Items</h1>
                
                    <div className="row">
                        <div className="col-md-10"></div>
                        <div className="col-md-2">
                            <Link to="/add-student">Create Student</Link>
                        </div>
                    </div><br />
                
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Gender</td>
                                <td>Teacher</td>
                                <td>Class Room</td>
                                <td>Joined Year</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tabRow()}
                        </tbody>
                    </table>
                    <div>{this.pagination()}</div>
                </div>
                )
    }
}
export default DisplayStudents;