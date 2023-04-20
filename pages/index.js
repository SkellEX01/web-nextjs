import React from 'react';
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
      <div>
          <Head>
              <title>Coder Wikipedia | Home</title>
              <meta name={'keywords'} content={'coders'}/>
          </Head>
          <h1 className={styles.title}>Home Page</h1>
          <p className={styles.text}>Lorem ipsum dolor</p>
          <p className={styles.text}>Lorem ipsum dolor</p>
          <Link href={'/coders/'}>
              <p className={'btn'}>See All Coders</p>
          </Link>

          <style jsx>
              {
                  `
                    .btn {
                      display: block;
                      width: 150px;
                      padding: 8px 0;
                      margin: 20px auto;
                      background: #ffbf49;
                      border-radius: 4px;
                      color: black;
                      text-align: center;
                    }
                  `
              }
          </style>
      </div>
  )
}

export default Home