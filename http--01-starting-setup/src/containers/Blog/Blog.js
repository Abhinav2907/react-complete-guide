import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import classes from './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
class Blog extends Component {
    
    


    render () {
        
        return (
            <div>
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/" 
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
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;