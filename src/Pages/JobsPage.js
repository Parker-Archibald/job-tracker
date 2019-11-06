import React, {Component} from 'react';
import '../Styles/Jobs.css';
import Jobs from '../Components/Jobs';
import {TRACKER_API} from '../Config/com';



class JobsPage extends Component {
    constructor(props) {
        document.title= 'Jobs Page';
        super(props); 
        this.state = {
            studentId: props.studentId,
            studentJobs: '',
            company_name: '',
            position: '',
            status: '',
            notes: ''
        }
    }

    componentDidMount = () => {
        fetch(`${TRACKER_API}/jobs/${this.state.studentId}`)
        .then(results => results.json())
        .then(data => data.jobs.map(data => <Jobs allJobs={data}/>))
        .then(info => this.setState({studentJobs: info}));
    }   

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {studentId, studentJobs, ...newJob} = this.state;
        console.log(newJob)
        fetch(`${TRACKER_API}/jobs/${this.state.studentId}`, {
            method: 'Put',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(results => results.json())
        .then(this.refresh(2000))
    }

    refresh = (timeoutPeriod) => {
        setTimeout("document.location.reload(true)", timeoutPeriod);
        alert("Your job has been added!");
    };

    render() {
        return (
            <div id='StudentsBack'>
                <div id='jobTitle'>Jobs List</div>
                <form id='addJob' onSubmit={this.handleSubmit}>
                    <div id='newJob'>Add a New Job</div>
                    <input type='text' placeholder='Company Name' id='companyInput' name='company_name' onChange={this.handleChange}/>
                    <input type='text' placeholder='Position' id='positionInput' name='position' onChange={this.handleChange}/>
                    {/* <input type='text' placeholder='Application Status' id='statusInput' name='status' onChange={this.handleChange}/> */}
                    <select id='statusInput' name='status' onChange={this.handleChange}>
                        <option selected hidden>Status</option>
                        <option>Saved</option>
                        <option>Applied</option>
                        <option>Scheduled an Interview</option>
                        <option>Interviewed</option>
                        <option>Offered</option>
                    </select>
                    <textarea type='text' placeholder='Notes' id='newJobNotes' name='notes' onChange={this.handleChange}/>
                    <div id='divAddBtn'><button type='submit' id='addBtn'>Add</button></div>
                </form>
                <div id='allJobs'>{this.state.studentJobs}</div>
            </div>
        )
    }
}
export default JobsPage;