import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Layout  from '../components/Layout/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vishal Vasishat - Portfolio</title>
        <meta name="description" content="React Portfolio - Created by Vishal Vasishat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
      <div id="toast-root"></div>
    </div>
  )
}
