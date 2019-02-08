import React, {Component} from 'react';

class CreateStudent extends Component {
  constructor(props){
    super(props);
    this.state = {firstname: '', lastname: '', 'gender': 'F', teacher_id:'1', class_room_id: '1', joined_year: '2018'};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange1(e){
    this.setState({
      firstname: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      lastname: e.target.value
    })
  }
  handleGenderChange(e){
    this.setState({
      gender: e.target.value
    })
  }
  handleClassChange(e){
    this.setState({
      class_room_id: e.target.value
    })
  }
  handleTeacherChange(e){
    this.setState({
      teacher_id: e.target.value
    })
  }
  handleYearChange(e){
    this.setState({
      joined_year: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      gender: this.state.gender,
      teacher_id: this.state.teacher_id,
      class_room_id: this.state.class_room_id,
      joined_year: this.state.joined_year
    }
    let uri = 'http://localhost:8000/api/students';
    axios.post(uri, student).then((response) => {
      // browserHistory.push('/display-item');
    });
  }

    render() {
      return (
      <div>
        <h1>Create Student</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>First Name:</label>
                <input type="text" className="form-control col-md-6" onChange={this.handleChange1}/>
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Last Name:</label>
                  <input type="text" className="form-control col-md-6" onChange={this.handleChange2}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                    <label>Gender:</label>
                    <select className="form-control col-md-6" value={this.state.gender} onChange={this.handleGenderChange}>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                    <label>Teacher:</label>
                    <select className="form-control col-md-6" value={this.state.teacher} onChange={this.handleTeacherChange}>
                        <option value="1">Emily</option>
                        <option value="2">Isabella</option>
                    </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                    <label>Class:</label>
                    <select className="form-control col-md-6" value={this.state.class_room_id} onChange={this.handleClassChange}>
                        <option value="1">Class A</option>
                        <option value="2">Class B</option>
                        <option value="3">Class C</option>
                    </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                    <label>Joined Year:</label>
                    <select className="form-control col-md-6" value={this.state.joined_year} onChange={this.handleYearChange}>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                    </select>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Item</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateStudent;