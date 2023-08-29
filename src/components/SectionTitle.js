import React from 'react';
import "../styles/SectionTitle.css"

export default function SectionTitle(props) {
    return (
        <div className="SectionTitle">
            <h2>/{props.title}</h2>
            <hr />
        </div>
    )
}