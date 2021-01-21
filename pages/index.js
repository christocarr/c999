
import Head from 'next/head'
import Header from '../components/Header'
import VideoTitle from '../components/VideoTitle'
import VideoPlayer from '../components/VideoPlayer'
import VideoDescription from '../components/VideoDescription'
import BackToTop from '../components/BackToTop'
import { data } from '../data'
import styles from '../styles/Home.module.css'

export default function Home() {

  const videoData = data.filter(item => item.section === 'video')
  const installationData = data.filter(item => item.section === 'installations')
  const mappingData = data.filter(item => item.section === 'mapping')
  const experimentalData = data.filter(item => item.section === 'experimental')
  const vjingData = data.filter(item => item.section === 'vjing')


  return (
    <div className={styles.container}>
      <Head>
        <title>c999 Visual Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.section} id="video">
          <h2>video art</h2>
          <div className={styles.videos__container}>
            {videoData.map((item, index) => (
              <div className={styles.video__section} key={index}>
                <VideoPlayer url={item.url} type={item.type}/>
                <VideoTitle title={item.title}/>
                <VideoDescription description={item.description}/>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} id="experimental">
          <h2>experimental films</h2>
          <div className={styles.videos__container}>
            {experimentalData.map((item, index) => (
              <div className={styles.video__section} key={index}>
                <VideoPlayer url={item.url} type={item.type}/>
                <VideoTitle title={item.title}/>
                <VideoDescription description={item.description}/>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} id="mapping">
          <h2>projection mapping</h2>
          <div className={styles.videos__container}>
            {mappingData.map((item, index) => (
              <div className={styles.video__section} key={index}>
                <VideoPlayer url={item.url} type={item.type}/>
                <VideoTitle title={item.title}/>
                <VideoDescription description={item.description}/>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} id="installations">
          <h2>installations</h2>
          <div className={styles.videos__container}>
            {installationData.map((item, index) => (
              <div className={styles.video__section} key={index}>
                <VideoPlayer url={item.url} type={item.type}/>
                <VideoTitle title={item.title}/>
                <VideoDescription description={item.description}/>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} id="vjing">
          <h2>vjing</h2>
          <div className={styles.videos__container}>
            {vjingData.map((item, index) => (
              <div className={styles.video__section} key={index}>
                <VideoPlayer url={item.url} type={item.type}/>
                <VideoTitle title={item.title}/>
                <VideoDescription description={item.description}/>
              </div>
            ))}
          </div>
        </section>
        
      </main>
      <BackToTop />
      <footer>
        
      </footer>
    </div>
  )
}
