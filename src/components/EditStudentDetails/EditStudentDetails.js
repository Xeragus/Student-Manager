import React, {Component} from 'react';
import StudentItem from "../StudentItem/StudentItem";

class EditStudentDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="">
                <input type="text" class="mb-2" value={this.props.student.firstName}/>
                <input type="text" class="mb-2" value={this.props.student.lastName}/>
                <input type="text" class="mb-2" value={this.props.student.studentId}/>
                <input type="text" class="mb-2" value={this.props.student.direction}/>
                <br/>
                <a href="#" class="btn btn-primary" id="submit_form">Submit</a>
            </div>
        );
    }
}

export default EditStudentDetails;