import React, { useState, useEffect } from 'react'
import "./Feed.css"
import Stories from "./Stories"
import Messages from "./Messages"
import Posts from "./Posts"
import { useStateValue } from './StateProvider'
import db from './firebase'

function Feed() {
    const [postlist, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("time", "desc").onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
    }, []);

    return (
        <div className="feed">
            <Stories />
            <Messages />

            {postlist.map((posts) => (
                <Posts
                    key={posts.id}
                    proPic={posts.data.proPic}
                    msg={posts.data.msg}
                    time={posts.data.time}
                    user={posts.data.user}
                    imag={posts.data.imag}
                />
            ))}
        </div>
    )
}

export default Feed
