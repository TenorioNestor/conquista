import Image from 'next/image'
import styles from './styles.module.css'

export default function Carrocel(){
    return (
        <section className={styles.section}>
            <Image
            width={1000}
            height={345}
            src="/predio_novo_arvore.jpg"
            alt="Picture of the author"
            className={styles.foto}
            />
        </section>
    )
}