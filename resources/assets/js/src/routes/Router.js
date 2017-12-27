import React, {Component} from 'react';
import Home from '../view/Home/Home'
import {Route, Switch} from 'react-router-dom';
import CreateItem from '../view/Item/Add';
import ListItem from '../view/Item/index';
import EditItem from '../view/Item/Edit';

class Router extends Component {
    constructor(props) {
        super(props);
    }

    ListItem() {
        return (
            <Switch>
                <Route exact path='/index' component={ListItem}/>
                <Route path='/index/edit/:id' component={EditItem}/>
            </Switch>
        )
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/add' component={CreateItem}/>
                    <Route path='/index' component={this.ListItem}/>
                </Switch>
            </main>
        )
    }
}

export default Router

