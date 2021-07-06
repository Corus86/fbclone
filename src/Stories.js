import React from 'react'
import "./Stories.css"
import Story from "./Story"

function Stories() {
    return (
        <div className="stories">
            <Story
                image="https://picsum.photos/200?random=1"
                proSrc="https://picsum.photos/500?random=6"
                title="Rhianne Booker"
            />
            <Story
                image="https://picsum.photos/200?random=2"
                proSrc="https://picsum.photos/500?random=7"
                title="Jean Acostansi"
            />
            <Story
                image="https://picsum.photos/200?random=3"
                proSrc="https://picsum.photos/500?random=8"
                title="Luqman Koch"
            />
            <Story
                image="https://picsum.photos/200?random=4"
                proSrc="https://picsum.photos/500?random=9"
                title="Cayson Bonefide"
            />
            <Story
                image="https://picsum.photos/200?random=5"
                proSrc="https://picsum.photos/500?random=10"
                title="Callie Mendez"
            />
        </div>
    )
}

export default Stories
