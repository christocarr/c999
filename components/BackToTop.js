import {useState, useEffect} from 'react'
import styles from '../styles/BackToTop.module.css'

function BackToTop() {

  const [buttonDisplay, setButtonDisplay] = useState('none')

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  useEffect(() => {

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 1000) {
        setButtonDisplay('block')
      } else {
        setButtonDisplay('none')
      }
    })

    
  }, [])

  return (
    <button 
      onClick={scrollToTop}
      style={{display: buttonDisplay}}
      className={styles.button} 
      >
        Back
      </button>
  )
}

export default BackToTop