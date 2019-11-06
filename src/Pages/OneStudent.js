import React, {Component} from 'react';
import '../Styles/OneStudent.css';

class OneStudent extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name: this.props.location.state.name,
            email: this.props.location.state.email,
            jobs: this.props.location.state.jobs,
        }
    }
    render() {
        return(
            <div  id='oneStudentBack'>
                <div id='oneStudentName'>{this.state.name}</div>
                
            </div>
        ) 
    }
}
export default OneStudent;