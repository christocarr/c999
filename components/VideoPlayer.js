import {useState, useEffect} from 'react'
import styles from '../styles/VideoPlayer.module.css'

function VideoPlayer({url, type}) {

  const [paddingSize, setPaddingSize] = useState('calc(100% * 9 / 16')

  useEffect(() => {
    if (type === 'vimeo') {
      setPaddingSize('100%')
    } 
  }, [])
  

  return (
    <div className={styles.player__wrapper} style={{paddingBottom: paddingSize}}>
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