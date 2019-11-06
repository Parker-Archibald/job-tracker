import React, {Component} from 'react';
import '../Styles/SingleJob.css';
import { TRACKER_API } from '../Config/com';
import JobsModal from './JobsModal'

class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company_name: this.props.allJobs.company_name,
            status: this.props.allJobs.status,
            position: this.props.allJobs.position,
            notes: this.props.allJobs.notes,
            id: decodeURIComponent(document.cookie).split(',')[1].split(' ')[3]
        }
    }

    handleDelete = (e) => {
        e.preventDefault();
        fetch(`${TRACKER_API}/jobs/${this.state.id}/${this.state.company_name}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: ''
        }
        ).then(results => results.json())
        .then(data => console.log(data))
        .then(this.refresh(1000))
    }

    refresh = (timeOutPeriod) => {
        setTimeout('document.location.reload(true)', timeOutPeriod)
        alert(`Job ${this.state.company_name} deleted successfully.`)
    }

    render() {
        return(
            <div id='jobBox'>
                <div id='job'>
                    <div id='jobName'>{this.state.company_name}</div>
                    <div id='jobStatus'>Status: {this.state.status}</div>
                    <div id='jobPosition'>Position: {this.state.position}</div>
                    <div id='jobNotes'>Notes: {this.state.notes}</div>
                    <div id='deleteJobBtn'><button id='jobDelete' onClick={this.handleDelete}>Delete Job</button></div>
                    <div id='updateJobs'><JobsModal job={this.state}/></div>
                </div>
            </div>
        )
    }
}
export default Jobs;