import styles from '../styles/VideoTitle.module.css'

function VideoTitle({title}) {
  return (
    <h3 className={styles.video__title}>{title}</h3>
  )
}

export default VideoTitle