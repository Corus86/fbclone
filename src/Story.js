import React from 'react'
import "./Story.css"
import { Avatar } from "@material-ui/core"

function Story({ image, proSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="story">
            <Avatar className="storyava" src={proSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
