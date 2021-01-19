import styles from '../styles/Description.module.css'

function VideoDescription({description}) {
  return (
    <p className={styles.description}>{description}</p>
  )
}

export default VideoDescription