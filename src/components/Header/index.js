import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'

export default function Header(){
    return(
        <header className={styles.header}>
            <Image
            width={250}
            height={180}
            src="/logoSemFundo.png"
            alt="Picture of the author"
            className={styles.logo}
            />
            <nav className={styles.nav}>
                <Link href='/' className={styles.link}>
                    Home
                </Link>
                <Link href='/sobre' className={styles.link}>
                    Sobre nós
                </Link>
                <Link href='/contatos' className={styles.link}>
                    Contatos
                </Link>
            </nav>
        </header>
    )
}