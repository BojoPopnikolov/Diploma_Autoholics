import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

import Header from '../components/ui/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Autoholics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
      </Header>
      <h1 className="flex flex-row text-3xl font-bold italic hover:not-italic">Tailwind</h1>
    </div>
  )
}
