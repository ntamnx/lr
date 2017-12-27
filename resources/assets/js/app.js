require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import DisplayItem from './c/DisplayItem';
import CreateItem from './c/CreateItem';
import EditItem from './c/EditItem';
const Display = () => (
    <Switch>
        <Route exact path='/index' component={DisplayItem}/>
        <Route path='/index/edit/:id' component={EditItem}/>
    </Switch>
)
const Home = () => (
    <div>
        <h1>Welcome to the Tornadoes Website!</h1>
    </div>
)
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/add' component={CreateItem}/>
            <Route path='/index' component={Display}/>
        </Switch>
    </main>
)
const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add'>Add</Link></li>
                <li><Link to='/index'>List</Link></li>
                <li><a href='/logout'>Logout</a></li>
            </ul>
        </nav>
    </header>
)


function Render() {
    if (typeof user !== "undefined") {
        return (
            <div className='container-fluid'>
                <Header/>
                <Main/>
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
