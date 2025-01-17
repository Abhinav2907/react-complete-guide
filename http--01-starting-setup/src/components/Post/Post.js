import React from 'react';

import classes from './Post.css';

const post = (props) => (
    <article className={classes.Post} onClick={props.clicked}>
        <h1 onClick={props.clicked}>{props.title}</h1>
        <div className={classes.Info}>
            <div className={classes.Author}>{props.author}</div>
        </div>
    </article>
);

export default post;