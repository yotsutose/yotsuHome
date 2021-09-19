import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react';
import Yotsu from './yotsu';
import Card from './card';

export default function Table() {
  const [message, setMessage] = useState('Welcome');

  useEffect(() => {
    if (window.location.pathname === "/") {
      setTimeout(() => {
        setMessage('To');
      }, 1000);
    }
  },[])

  return (
    <div className="container">
    <div className="row row-eq-height">
        <div className="col-md-3">
            <main className={styles.main}>
                <h1 className={styles.title}>neko</h1>
            </main>
        </div>
        <div className="col-md-6">
            <Yotsu/>
        </div>
        <div className="col-md-3">
            <Card/>
            <Card/>
        </div>
    </div>
</div>
  )
}
