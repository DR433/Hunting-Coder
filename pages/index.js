import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* The head content of your website just like you write code in html */}
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="A blog for the coders to hunt down the best coders for making good quality products." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* This will help you load the other third party websites load lazily or before the website is interactive based on the strategy attribute. strategies can be lazyOnload or beforeInteractive or afterInteractive for systematically lazily loading website or before loading the website or after laoding the website .*/}
      {/* <Script src='/somejs.js' strategy='lazyOnload'></Script> */}



      {/* This is a way to write normal css with style tag instead it's a jsx style css and it's those css that can not be applied from the external stylesheets . */}
      <style jsx>{`
        .heading h1{
          font-size: 60px;
          text-align: center;
          padding-bottom: 10px; 
        }
        .heading span{
          text-align: center;
          padding-top: 20px;
          font-size: 26px;
          font-weight: bold; 
        }
      `}</style>

      {/* The main content of the homepage of your website  */}
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}

              {/* while exporting the next js full website as a statically generated website, you can not use the Image tag provided by nextjs and you have to use the normal image tag used in html . */}
              <img src="/vercel.svg" alt="vercel logo" width={100} height={24}/>
              {/* <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              /> */}
            </a>
          </div>
        </div>

        <div className={styles.center}>
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> */}
          <div className={styles.heading}>
            <img src="/coding-Background-Image.jpg" alt="Hunting-Coder-Homepage-Image" />
            <h1>Hunting Coder</h1>
            <span>A blog for the coders to hunt down the best coders for making good quality products.</span>
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            href={'/about'}
            // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </Link>

          <Link
            href={'/contacts'}
            // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contact <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </Link>

          <Link
            href={'/blogs'}
            // href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Blogs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </Link>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
