require('../bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import Header from './view/practice/Header';
import Router from './routes/Router'

function Render() {
    if (typeof user !== "undefined") {
        return (
            <div className='container-fluid'>
                <Header/>
                <Router/>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}

ReactDOM.render((
    <HashRouter>
        <Render/>
    </HashRouter>
), document.getElementById('root'))
