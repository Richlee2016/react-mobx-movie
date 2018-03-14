import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./com.less"
export default function({list}){
    const mapLink = list.list.map((o,i) => {
        if(i>=6){return null}
        return (
            <Link to={`/online${o.href}`} key={o.href}>
                <img src={o.img} />
                <p>{o.title}</p>
            </Link>
        )
    })
    const mapText = list.text.map(o => {
        return (
            <Link to={`/online${o.href}`} key={o.href}>{o.title}</Link>
        )
    })
    return (
        <div className="ol-list">
            <h3>{list.head.name}</h3>
            <ul>
                <li className="olli-top">
                    {mapLink}
                </li>
                <li className="olli-bottom">
                    {mapText}
                </li>
            </ul>
        </div>
    )
}