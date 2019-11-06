import React, {Component} from 'react';
import {TRACKER_API} from '../Config/com';
import '../Styles/Students.css';
import SingleStudent from '../Components/SingleStudent';

class StudentsPage extends Component {

    state = {
        searchCriteria: ''
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value});
    }

    handleSubmit = (e) => {
        if(this.state.searchCriteria === '') {
            fetch(`${TRACKER_API}/students`)
            .then(results => results.json())
            .then(data => data.map(data => <SingleStudent id='singleStudentAll' student={data}/>))
            .then(info => this.setState({searchCriteria: info}))
            .then(info => console.log(info))
        }
        else {
            e.preventDefault();
            console.log('fetch one')
        }
    }

    componentDidMount = () => {
        this.handleSubmit();
    }

    render() {
        return(
            <div id='studentsPageBack'>
                <div id='studentSearch'>
                    <div id='studentSearchTitle'>
                        Search for a student.
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='name' placeholder='Search' name='searchCriteria' id='searchCriteria' onChange={this.handleChange}/>
                        <button type='submit' id='searchBtn'><i id='searchIcon' class='material-icons'>search</i></button>
                    </form>
                </div>
                <div id='singleStudentAll'>
                    <div id='studentsTitle'>Students</div>
                    <div id='allInfo'>{this.state.searchCriteria}</div>
                    <br/>
                </div>
            </div>
        )
    }
}
export default StudentsPage;