import Head from 'next/head'
import Image from 'next/image'
import yotsu from '../public/yotsu.png';
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react';

export default function Yotsu() {
  const [message, setMessage] = useState('Welcome');

  return (
    <div className={styles.container}>
      <Image src={yotsu} alt='neko' />
    </div>
  )
}
