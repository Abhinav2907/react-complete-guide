import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import classes from './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
//import FullPost from './FullPost/FullPost';
const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost');
});
class Blog extends Component {
    state = {
        auth:true
    }

    render () {
        
        return (
            <div>
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/posts" 
                                    exact 
                                    activeClassName="Myactive" 
                                    activeStyle={{ color: 'red', textDecoration: 'underline' }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit'
                            }} activeStyle={{ color: 'red', textDecoration: 'underline' }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <Posts/>}/> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/>: null}
                    <Route path="/posts" component={Posts}/>
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;