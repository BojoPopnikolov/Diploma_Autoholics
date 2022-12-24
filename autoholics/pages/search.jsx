import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from "../components/ui/header";
import Nav from '../components/ui/nav';

function Search()
{
    return(
        <div className={styles.container}>
            <Head>
                <title>Autoholics</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <Nav/>
            <section>Search Page</section>
      </div>
    );
};

export default Search;