import React from 'react';
import axios from '../../../axios';
import classes from './Posts.css';
import Post from '../../../components/Post/Post';
//import { Link } from 'react-router-dom';
class Posts extends React.Component {
    state = {
        posts: []
    }

    componentDidMount () {
        axios.get("/posts").then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Manu'
                }
            });
            this.setState({posts: updatedPosts});
            //console.log(response);
        }).catch(error => {
            console.log(error)
        });
    }
    
    postSelectedHandler = (id) => {
        console.log("cliuck");
        console.log(this.props);
        this.props.history.push('/'+id);
    }

    render () {
        const posts = this.state.posts.map(post => {
            return (
                    //<Link to={'/'+post.id} key={post.id} >
                        <Post 
                            key={post.id}
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
                    //</Link>
                    );
        });
        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        );
    }
}

export default Posts;
