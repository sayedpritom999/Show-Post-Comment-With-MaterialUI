import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const Comments = (props) => {
    const comment = props.comment;
    const user = props.user;

    const [image, setImage] = useState({})
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => setImage((data.results[0].picture).medium))
    }, [])
    return (
        <section style={{ "background": "#f2f2f2", "borderRadius": "15px", "paddingLeft": "15px", "marginBottom": "20px" }}>
            <div style={{ "display": "flex", "alignItems": "center" }}>
                <Avatar alt="Remy Sharp" src={image} />
                <h4 className="primary.main" style={{ "marginLeft": "10px" }}>{comment.email}</h4>
            </div>
            <p style={{ "padding": "0 22px 20px  50px", "margin": 0 }}>{comment.body}</p>
        </section>
    );
};

export default Comments;