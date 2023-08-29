import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header/index';
import styles from '../styles/Home.module.css'
import Carrocel from '../components/Carrocel/index'
import Condominios from '@/components/Condominios';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <>
      <Head>
        <title>Conquista</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main>
        <Header />
        <Carrocel/>
        <section className={styles.sobre}>
          <div className={styles.logo}>
            <Image
            width={400}
            height={300}
            src="/logoSemFundo.png"
            alt="Picture of the author"
            />

          </div>
          <div className={styles.texto}>
          <h1>Sobre a Conquista</h1>
          <h2>Qualidade em contruçao</h2>
          <p>Bem-vindo à ConstruConquista! Somos uma empresa dedicada à excelência na construção e realização de sonhos. Com uma história sólida e tradição no mercado, buscamos oferecer soluções de engenharia e construção com qualidade, inovação e comprometimento.</p>
          </div>
        </section>
        <Condominios/>
        <Footer/>
      </main>
    </>
  );
}
