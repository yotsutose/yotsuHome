import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react';

export default function Message() {
  const [message, setMessage] = useState('Welcome');

  useEffect(() => {
    if (window.location.pathname === "/") {
      setTimeout(() => {
        setMessage('To');
      }, 1000);
    }
  },[])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {message}
        </h1>
      </main>
    </div>
  )
}
