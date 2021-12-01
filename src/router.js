import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginCheck from './api/LoginCheck';
import AddTodo from './component/AddTodo';
import DetailTodo from './component/DetailTodo';
import LayoutTodos from './component/layoutTodos';
import Login from './component/login';
import Register from './component/register';
import TodoList from './component/todos';
const Routers = (props) => {
    return (
        <Router>
            <LayoutTodos>
            <Switch>
                <LoginCheck exact path="/">
                    <TodoList {...props} />
                </LoginCheck>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/todo/:id">
                    <DetailTodo {...props}/>
                </Route>
                <Route path="/todoadd">
                    <AddTodo {...props} />
                </Route>
            </Switch>
            </LayoutTodos>
        </Router>

    )
}

export default Routers
