import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StudentAccess from './StudentAccess';
import AdminAccess from './AdminAccess';
import * as serviceWorker from './serviceWorker';
import Login from '../src/Pages/Login'

let testCookie;
let cookieArray = [];
document.title = "Job-tracker"

export const changeLoginStatus = (status, childId, adminAccess) => {
    if(status === true) {
        let today = new Date();
        let now = today.getTime();
        let expireTime = now + 1000 * 2400;
        today.setTime(expireTime);
        document.cookie = `loggedIn = true, id = ${childId}, adminAccess=${adminAccess}, expires=${today}`;
        testCookie = decodeURIComponent(document.cookie)
        cookieArray = testCookie.split(',');
        renderLogin(childId)
    }
    else {
        renderLogin(childId);
    }
    
}

export const renderLogin = (status) => {
        testCookie = decodeURIComponent(document.cookie)
        cookieArray = testCookie.split(',');
        if(cookieArray[0] === 'loggedIn=true' && cookieArray[2] === " adminAccess=true") {
            let accessId = cookieArray[1].split(' ');
            ReactDOM.render(<AdminAccess parentId={accessId[3]}/>, document.getElementById('root'));
        }
        else if(cookieArray[0] === 'loggedIn=true') {
            let accessId = cookieArray[1].split(' ');
            ReactDOM.render(<StudentAccess parentId={accessId[3]}/>, document.getElementById('root'));
        }
        else {
            ReactDOM.render(<Login callback={changeLoginStatus}/>, document.getElementById('root'));
        }
}

renderLogin();
   

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
