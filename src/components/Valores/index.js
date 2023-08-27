import styles from './styles.module.css'

export default function valores(){
    return(
        <>
            <section className={styles.container}>
                <div className={styles.escudo}>
                    <h1>Missao</h1>
                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos</p>
                </div>
                <div className={styles.escudoClaro}>
                    <h1>Visao</h1>
                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos</p>
                </div>
                <div className={styles.escudo}>
                    <h1>Valores</h1>
                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos</p>
                </div>
            </section>
            
        </>
    )
}