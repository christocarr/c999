import styles from '../styles/VideoPlayer.module.css'

function VideoPlayer({url}) {
  return (
    <div className={styles.player__wrapper}>
      <iframe src={url}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/>
    
    </div>
  )
}

export default VideoPlayer