import Head from 'next/head'
import Image from 'next/image'
import React, {useEffect, useState} from 'react';
import styles from '../styles/Home.module.css'
// 'index.html', 'works.html', 'history.html', 'skills.html'
export default function Card(props) {
    const contents = {
        "index.html": {
            "title": "About",
            "text": ""
        },
        "works.html": {
            "title": "Works",
            "text": "bb"
        },
        "history.html": {
            "title": "History",
            "text": "cc"
        },
        "skills.html": {
            "title": "Skills",
            "text": "cc"
        }
    };

    return (
        <div style={{"padding":"4px 0"}}>
            <div className="card mx-auto" style={{"padding":"3px 0"}}>
                <div className="card-body">
                    <h4 className="card-title">{contents[props.filename]["title"]}</h4>
                    <p className="card-text">Some quick example text to build</p>
                </div>
            </div>
        </div>
    )
}
