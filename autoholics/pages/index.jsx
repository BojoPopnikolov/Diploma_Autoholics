import styles from '../styles/Home.module.css'

import Home_Container from '../components/home_container'
import { PrismaClient } from '@prisma/client'

export async function getServerSideProps(){
  const prisma = new PrismaClient();
  const listings = await prisma.listing.findMany();

  return {
    props: { listings }
  }
}

export default function Home({listings}) {
  return (
    <div className={styles.container}>
      <Home_Container listings={listings}/>
    </div>
  )
}
