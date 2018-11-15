import React,{Component} from 'react';

class StudentItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr>
                <th><a href="#" onClick={this.showEdit}>{this.props.student.firstName} {this.props.student.lastName}</a></th>
            </tr>
        );
    }

    showEdit = () => {

    };
}

export default StudentItem;