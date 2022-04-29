import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react';
import Message from '../components/message';
import Yotsu from '../components/yotsu';
import Table from '../components/table'

export default function Home() {
  const [value, setValue] = useState('$ ');
  const [pwd, setPwd] = useState('~');
  const filenames = {'~': ['dir', 'README.md'],
                    '~/dir': ['index.html', 'works.html', 'history.html', 'memo.txt']};

  const handleKeyPress = e => {
    if(e.key == 'Enter'){
      const splitedInputValue = e.target.value.split('\n');
      const line = splitedInputValue.slice(-1)[0].replace(/\$/, '').replace(/\s+/, '');
      splitedInputValue.push.apply(splitedInputValue, parse(line));
      setValue(splitedInputValue.join('\n'));
    }
    if(e.key == 'Tab'){
      e.preventDefault();
      const splitedInputValue = e.target.value.split('\n');
      let unfixedLast = splitedInputValue.pop();
      const fixedLast = unfixedLast.replace(/\$\s+/, ''); // 先頭消す
      const splitedLine = fixedLast.split(/\s+/g); // spaceで分ける
      if((splitedLine[0] == 'cat'|| splitedLine[0] == 'cd') && splitedLine.length == 2){
        for(let filename of filenames[pwd]){
          if(!filename.indexOf(splitedLine[1])){
            const replacedLast = unfixedLast.substring(0,unfixedLast.lastIndexOf(splitedLine[1])) + filename;
            splitedInputValue.push(replacedLast);
            setValue(splitedInputValue.join('\n'));
          }
        }
      }
    }
  }

  const handleChangeValue = e => {
    const splitedInputValue = e.target.value.split('\n');
    const unfixedLast = splitedInputValue.pop();
    const fixedLast = '$ ' + unfixedLast.replace(/\$/g, '').replace(/\ /, '');  
    splitedInputValue.push(fixedLast);
    setValue(splitedInputValue.join('\n'));
  }

  const parse = (line: string) => {
    const splitedLine = line.split(/\s+/g);
    if(splitedLine[0] == '') return [];
    if(splitedLine[0] == 'pwd') return [pwd];
    if(splitedLine[0] == 'ls') return ls(splitedLine);
    if(splitedLine[0] == 'cd') return cd(splitedLine);
    if(splitedLine[0] == 'cat') return cat(splitedLine);
    return ['command not found: ' + line];
  }

  const ls = (splitedLine: string[]) => {
    if(splitedLine.length != 1) return ['No such file or directory'];
    return filenames[pwd];
  }

  const cd = (splitedLine: string[]) => {
    if(splitedLine[1] == 'dir' && pwd == '~'){
      setPwd(pwd+'/dir');
      return [];
    }
    else if((splitedLine[1] == '..' || splitedLine[1] == '~') && pwd == '~/dir'){
      setPwd('~');
      return [];
    }
    else return ['not found derectory'];
  }

  const cat = (splitedLine: string[]) => {
    for(let filename of filenames[pwd]){
      if(splitedLine[1]==filename) return [filename+"のfileの中身"];
    }
    return ['No such file or directory'];
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ほーむ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Create yourself</h1>
      <h3>Example</h3>
      <p>
        $ cat README.md↵
      </p>

      <textarea
        className={styles.input}
        onKeyDown={handleKeyPress} // keyを押したとき(変化は起こってない)
        onChange={handleChangeValue} // 改行が行われて変化が起こったとき
        value={value}
      />

    </div>
  )
}
