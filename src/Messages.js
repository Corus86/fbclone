import React, { useState } from 'react'
import "./Messages.css"
import { Avatar } from "@material-ui/core"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase";

function Messages() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = e => {
        e.preventDefault();

        db.collection("posts").add({
            msg: input,
            time: firebase.firestore.FieldValue.serverTimestamp(),
            proPic: user.photoURL,
            user: user.displayName,
            imag: imageUrl,
        });

        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messages">
            <div className="msgTop">
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} className="msgInput" placeholder={`What grandeur lies within your brain, ${user.displayName}?`} />
                    <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="Image URL" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="msgBot">
                <div className="msgOpt">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Videos</h3>
                </div>

                <div className="msgOpt">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photos</h3>
                </div>

                <div className="msgOpt">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feelings</h3>
                </div>
            </div>
        </div>
    )
}

export default Messages
