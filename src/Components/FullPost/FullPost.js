import { Avatar, Box, Button, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import comments from '../FakeData/comments';
import users from '../FakeData/users';

const FullPost = () => {
    const { postID } = useParams();

    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);
    const [comment, setComment] = useState([]);

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
        const randomNumber = Math.ceil(Math.random() * 500);
        const randomComment = comments.find(cmt => cmt.id == randomNumber);
        setComment(randomComment);
    }, [])

    return (
        <Container maxWidth='sm' style={{"marginBottom": "100px"}}>
            <Box component="span" m={1}>
                <h2>{post.title}</h2>
                <img src={`https://picsum.photos/id/${parseFloat(postID ) + 120}/550/300`} alt=""/>
                <p>{post.body}</p>
            </Box>
            <section style={{ "background": "#f2f2f2", "borderRadius": "15px", "paddingLeft": "15px" }}>
                <div style={{ "display": "flex", "alignItems": "center" }}>
                    <Avatar alt="Remy Sharp" src={user.photo} />
                    <h4 className="primary.main" style={{ "marginLeft": "10px" }}>{user.name}</h4>
                </div>
                <p style={{ "padding": "0 22px 20px  50px", "margin": 0 }}>{comment.body}</p>
            </section>
            <br />
            <Button variant="contained" color="primary" onClick={() => handleClick()}>Back</Button>
        </Container>
    );
};

export default FullPost;