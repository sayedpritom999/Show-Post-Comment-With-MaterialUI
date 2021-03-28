import { Avatar, Box, Button, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Comments from '../Comments/Comments';
import comments from '../FakeData/comments';
import users from '../FakeData/users';

const FullPost = () => {
    const { postID } = useParams();

    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);
    const [comments, setComments] = useState([]);

    const history = useHistory();
    const handleClick = () => {
        history.push('/')
    }
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [])

    useEffect(() => {
        const randomNumber = Math.ceil(Math.random() * 10);
        const randomUser = users.find(usr => usr.id == randomNumber);
        setUser(randomUser);
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
            .then(response => response.json())
            .then(json => setComments(json))
    }, [])

    return (
        <Container maxWidth='sm' style={{ "marginBottom": "100px" }}>
            <Box component="span" m={1}>
                <div style={{"display": "flex", "alignItems":"center"}}>
                    <Avatar style={{"marginRight":"20px"}} src={`https://picsum.photos/id/${(parseInt(postID)) + 100}/500/300`} />
                    <h2>{post.title}</h2>
                </div>
                <img src={`https://picsum.photos/id/${parseFloat(postID) + 120}/550/300`} alt="" />
                <p>{post.body}</p>
            </Box>
            <br />
            {
                comments.map(cmt => <Comments comment={cmt} user={user}></Comments>)
            }
            <Button variant="contained" color="primary" onClick={() => handleClick()}>Back</Button>
        </Container>
    );
};

export default FullPost;