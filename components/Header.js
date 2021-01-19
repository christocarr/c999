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
        <div className={styles.contact__icons}>
          <Link href="https://www.instagram.com">
            <div className={styles.instagram}>
              <Image 
                src="/images/instagram.png"
                layout="fill"
                objectFit="cover"
                alt="instagram" 
              />
            </div>
          </Link>
          <Link href="">
            <div className={styles.mail}>
              <Image 
                src="/images/mail.png"
                layout="fill"
                objectFit="cover"
                alt="mail" 
              />
            </div>
          </Link>
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav_list}>
            <li>
              <Link href="/#video">
                video
              </Link>
            </li>
            <li>
              <Link href="/#experimental">
                experimental
              </Link>
            </li>
            <li>
              <Link href="/#installations">
                installations
              </Link>
            </li>
            <li>
              <Link href="/#mapping">
                mapping
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header