import Head from 'next/head'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import StreamNow from '@/components/StreamNow'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>DStream</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='m-10 flex-row'>
        {/* <Sidebar /> */}
        <StreamNow />
      </div>
    </>
  )
}
