import React, {Component} from 'react';

class Paginate extends Component {
    handlePaginate(e,handler) {
        e.preventDefault();
        axios.get(e.target.getAttribute('href'))
        .then(response => {
            handler(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" onClick={(e)=>{this.handlePaginate(e,this.props.handler);}} href={this.props.obj.first}>Previous</a></li>
                    <li className="page-item"><a className="page-link" onClick={(e)=>{this.handlePaginate(e,this.props.handler);}} href={this.props.obj.next}>Next</a></li>
                </ul>
            </nav>
        );
    }
}
export default Paginate;