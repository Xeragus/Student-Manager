import React, {Component} from 'react';
import StudentItem from "../StudentItem/StudentItem";

class StudentsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const students = this.getStudents();

        return(
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th>Student name</th>
                </tr>
                </thead>
                <tbody>
                {students}
                </tbody>
            </table>
        );
    }

    getStudents = () => {
        return this.props.students
            .map((student, index) => {
                return <StudentItem student={student} key={index}/>
            });
    };

    returnStudent = (student) => {
        return student;
    }
}

export default StudentsList;