import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import VideoTitle from '../components/VideoTitle'
import VideoPlayer from '../components/VideoPlayer'
import VideoDescription from '../components/VideoDescription'
import { data } from '../data'
import styles from '../styles/Home.module.css'

export default function Home() {

  const videoData = data.filter(item => item.section === 'video')
  const installationData = data.filter(item => item.section === 'installations')
  const mappingData = data.filter(item => item.section === 'mapping')
  const experimentalData = data.filter(item => item.section === 'experimental')

  return (
    <div className={styles.container}>
      <Head>
        <title>c999 Visual Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.header__image}>
          <Image src="/images/c999-logo.png" width="204" height="84" alt="logo"/>
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav_list}>
            <li>
              <Link href="#videoart">
                video
              </Link>
            </li>
            <li>
              <Link href="#experimental">
                experimental
              </Link>
            </li>
            <li>
              <Link href="#installations">
                installations
              </Link>
            </li>
            <li>
              <Link href="mapping">
                mapping
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="video">
          <h2>video</h2>
          {videoData.map((item, index) => (
            <div key={index}>
              <VideoTitle title={item.title}/>
              <VideoPlayer url={item.url}/>
              <VideoDescription description={item.description}/>
            </div>
          ))}
        </section>

        <section id="experimental">
          <h2>experimental</h2>
          {experimentalData.map((item, index) => (
            <div key={index}>
              <VideoTitle title={item.title}/>
              <VideoPlayer url={item.url}/>
              <VideoDescription description={item.description}/>
            </div>
          ))}
        </section>

        <section id="installations">
          <h2>installations</h2>
          {installationData.map((item, index) => (
            <div key={index}>
              <VideoTitle title={item.title}/>
              <VideoPlayer url={item.url}/>
              <VideoDescription description={item.description}/>
            </div>
          ))}
        </section>

        <section id="mapping">
          <h2>mapping</h2>
          {mappingData.map((item, index) => (
            <div key={index}>
              <VideoTitle title={item.title}/>
              <VideoPlayer url={item.url}/>
              <VideoDescription description={item.description}/>
            </div>
          ))}
        </section>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
