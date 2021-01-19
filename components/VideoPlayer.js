import ReactPlayer from 'react-player'
import styles from '../styles/VideoPlayer.module.css'

function VideoPlayer({url}) {
  return (
    <div className={styles.player__wrapper}>
    
      <ReactPlayer 
        className={styles.player} 
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default VideoPlayer