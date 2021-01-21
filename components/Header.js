import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.header__image}>
          <Image 
            src="/images/c999-logo.png"
            layout="fill"
            objectFit="cover"
            alt="logo"
          />
        </div>

        <nav className={styles.header__nav}>
          <ul className={styles.header__nav_list}>
            <li>
              <Link href="/#video">
                video art
              </Link>
            </li>
            <li>
              <Link href="/#experimental">
                experimental films
              </Link>
            </li>
            <li>
              <Link href="/#mapping">
                projection mapping
              </Link>
            </li>
            <li>
              <Link href="/#installations">
                installations
              </Link>
            </li>
            <li>
              <Link href="/#installations">
                vjing
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.contact__icons}>
          <Link href="https://www.instagram.com/c999visual">
            <div className={styles.instagram}>
              <Image 
                src="/images/instagram.png"
                layout="fill"
                objectFit="cover"
                alt="instagram" 
              />
            </div>
          </Link>
          <Link href="mailto:c999@live.it">
            <div className={styles.mail}>
              <Image 
                src="/images/mail-icon.png"
                layout="fill"
                objectFit="cover"
                alt="mail" 
              />
            </div>
          </Link>
        </div>
      </header>
  )
}

export default Header