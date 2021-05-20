import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import Home from "./components/Home/Home";
import TodoList from "./components/TodoList/TodoList";
import { history } from "./helpers/history";

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={AddTodo} />
                <Route exact path="/list" component={TodoList} />
                <Route exact path="/edit" component={EditTodo} />
            </Switch>
        </Router>
    );
};

export default Routes;
