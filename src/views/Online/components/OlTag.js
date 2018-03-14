import React, { Component } from "react";
import {Link} from 'react-router-dom'
export default function({tags}){
    const tag = tags.map(o => {
        return (
            <li key={o.href}>
                <Link to={`/online/${o.link}/${o.type}`}>{o.name}</Link>
            </li>
        )
    })
    return (
        <ul className="ol-sub-menu">
            {tag}
        </ul>
    )
}