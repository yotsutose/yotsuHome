import Head from 'next/head'
import Image from 'next/image'
import React, {useEffect, useState} from 'react';
import styles from '../styles/Home.module.css'

export default function Card() {
    return (
        <div>
            <div className="card mx-auto" style={{"width": "auto", 'top':'50%' }}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build</p>
                </div>
            </div>
        </div>
    )
}
