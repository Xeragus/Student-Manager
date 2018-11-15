import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentsList from "../StudentsList/StudentsList";
import {listStudents} from "../../repository/studentRepository";
import EditStudentDetails from "../EditStudentDetails/EditStudentDetails";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: listStudents(),
            student: ''
        };
    }

    render() {
      return (
          <div class="container p-5">
              <div className="row">
                  <div className="col-sm-6">
                      <div className="">
                          <StudentsList students={this.state.students}/>
                      </div>
                  </div>
                  <div className="col-sm-6">
                        <EditStudentDetails student={this.state.student}/>
                  </div>
              </div>
          </div>
      );
    }

    getStudent = (student) => {
        this.setState({
            student: student
        });
    };
}

export default App;
