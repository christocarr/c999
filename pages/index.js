import Head from 'next/head'
import Header from '../components/Header'
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
      <Header />
      <main>
        <section className={styles.section} id="video">
          <h2>video</h2>
          {videoData.map((item, index) => (
            <div key={index}>
              <VideoPlayer url={item.url}/>
              <VideoTitle title={item.title}/>
              <VideoDescription description={item.description}/>
            </div>
          ))}
        </section>

        <section className={styles.section} id="experimental">
          <h2>experimental</h2>
          {experimentalData.map((item, index) => (
            <div key={index}>
              <VideoPlayer url={item.url}/>
              <VideoTitle title={item.title}/>
              <VideoDescription description={item.description}/>
            </div>
          ))}
        </section>

        <section className={styles.section} id="installations">
          <h2>installations</h2>
          {installationData.map((item, index) => (
            <div key={index}>
              <VideoPlayer url={item.url}/>
              <VideoTitle title={item.title}/>
              <VideoDescription description={item.description}/>
            </div>
          ))}
        </section>

        <section className={styles.section} id="mapping">
          <h2>mapping</h2>
          {mappingData.map((item, index) => (
            <div key={index}>
              <VideoPlayer url={item.url}/>
              <VideoTitle title={item.title}/>
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
