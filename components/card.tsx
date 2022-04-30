import Head from 'next/head'
import Image from 'next/image'
import React, {useEffect, useState} from 'react';
import styles from '../styles/Home.module.css'
// 'index.html', 'works.html', 'history.html', 'skills.html'
export default function Card(props) {
    const contents = {
        "index.html": {
            "title": "About",
            "text": "Name: Tomoya Sakabe"
        },
        "works.html": {
            "title": "Works",
            "text": "Command HP(this), ソートなぞなそ, AR-SugarBox"
        },
        "history.html": {
            "title": "History",
            "text": "2019-2023(expected): Nagoya Institute of Technology, Japan Bachelor of Computer Science"
        },
        "skills.html": {
            "title": "Skills",
            "text": "C++, Typescript(Next.js), Ruby(Ruby on Rails)"
        }
    };

    return (
        <div style={{"padding":"4px 0"}}>
            <div className="card mx-auto" style={{"padding":"3px 0"}}>
                <div className="card-body">
                    <h4 className="card-title">{contents[props.filename]["title"]}</h4>
                    <p className="card-text">{contents[props.filename]["text"]}</p>
                </div>
            </div>
        </div>
    )
}
