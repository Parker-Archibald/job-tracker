import React, {Component} from 'react';
import '../Styles/TopNav.css';
import {TRACKER_API} from '../Config/com';

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentId: this.props.studentId,
            name: '',
            email: ''
        }
    }

    componentDidMount = () => {
        fetch(`${TRACKER_API}/home/${this.state.studentId}`)
        .then(results => results.json())
        .then(data => this.setState({name: data.name, email: data.email}));
    }

    handleMenu = (e) => {
        e.preventDefault();
        document.getElementById('personMenu').className = 'personMenu';
        document.getElementById('selectProfile').className = 'selectProfile';
        document.getElementById('selectSettings').className = 'menuSettings';
        document.getElementById('logout').className = 'menuLogout';
    }

    leaveMenu = e => {
        e.preventDefault();
        setTimeout(() => {
            document.getElementById('personMenu').className = '';
            document.getElementById('selectProfile').className = 'menuProfile';
            document.getElementById('selectSettings').className = 'selectSettings';
            document.getElementById('logout').className = 'logout';
        }, 100)
        
    }
    
    //logout button
    handleClick = (e) => {
        e.preventDefault();
        let today = new Date();
        let time = today.getTime();
        let pastTime = time - 1000 * 2400;
        today.setTime(pastTime);
        document.cookie = `loggedIn = false, id = ''; expires=${today}`;
        document.location.reload(true);
    }

    render() {
        return(
            <div>
                <div id='topBar'>
                    <div id='helioPic'><div id='logoText'>Helio Training</div></div>
                    <div id='personMenu'>
                        <button onClick={this.handleMenu} onBlur={this.leaveMenu} id='helloPerson' className='helloPerson1'>Hello {this.state.name}<i id='arrowDown'/></button>
                        <button id='selectProfile' className='menuProfile'>Profile</button>
                        <button id='selectSettings' className='selectSettings'>Settings</button>
                        <button id='logout' className='logout' onClick={this.handleClick}>Logout</button>
                    </div>
                </div>   
            </div>
        )
    }
}
export default TopNav;