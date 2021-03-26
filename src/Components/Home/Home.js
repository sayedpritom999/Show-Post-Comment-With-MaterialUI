import React from 'react';
import { useEffect, useState } from 'react';
import Post from '../Posts/Post';


const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPost(json))
    }, [])
    return (
        <div style={{"display": "flex", "flex-wrap": "wrap", "justify-content": "center"}}>
            {
                post.map(pst => <Post post={pst} key={pst.id} img={"https://picsum.photos/200/300"}></Post>)
            }
        </div>
    );
};

export default Home;