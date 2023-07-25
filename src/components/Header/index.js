import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'

export default function Header(){
    return(
        <header className={styles.header}>
            <Image
            width={300}
            height={300}
            src="/logoSemFundo.png"
            alt="Picture of the author"
            className={styles.logo}
            />
            <nav className={styles.nav}>
                <Link href='/' className={styles.link}>
                    Home
                </Link>
                <Link href='/' className={styles.link}>
                    Empreendimentos
                </Link>
                <Link href='/' className={styles.link}>
                    Sobre
                </Link>
                <Link href='/' className={styles.link}>
                    Contatos
                </Link>
            </nav>
        </header>
    )
}