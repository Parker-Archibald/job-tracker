import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Students.css';

class SingleStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.student.name,
            email: this.props.student.email,
            jobs: this.props.student.jobs,
            company_name: ''
        }
    }

    componentDidMount = () => {
        if(!this.state.jobs[0]) {
            this.setState({company_name: 'No Jobs to list'})
        }
        else {
            this.setState({company_name: ''})
        }
    }

    render() {
        return (
            <div>
                <div id='studentBox'>
                <div id='studentName'>{this.state.name}
                
                </div>
            </div>
            <Link to={{pathname: `/oneStudent/${this.state.name}`, state: this.state}} id='viewStudent' style={{textDecoration: 'none', color: 'black'}}>View Student</Link>
            </div>
        )
    }
}
export default SingleStudent;