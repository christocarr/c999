import ReactPlayer from 'react-player/lazy'
import styles from '../styles/VideoPlayer.module.css'

function VideoPlayer({url}) {
  return (
    <div className={styles.player__wrapper}>
    
      {/* <ReactPlayer 
        className={styles.player} 
        url={url}
        width="100%"
        height="100%"
      /> */}
      <iframe src={url}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
    
    </div>
  )
}

export default VideoPlayer