import React from 'react';
import "./Posts.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Posts({ proPic, imag, user, time, msg }) {
    return (
        <div className="posts">

            <div className="postTop">
                <Avatar src={proPic} className="postAva" />
                <div className="postTopInfo">
                    <h3>{user}</h3>
                    <p>{new Date(time?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="postBot">
                <p>{msg}</p>
            </div>

            <div className="postImg">
                <img src={imag} alt="" />
            </div>

            <div className="postOpts">
                <div className="postOpt">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="postOpt">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="postOpt">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="postOpt">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>  

        </div>
    )
}

export default Posts
