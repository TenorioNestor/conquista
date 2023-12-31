import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import styles from "./styles.module.css";
export default function contatos(){
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
            <div className={styles.banner}>
              <h1>
                Contatos
              </h1>
            </div>
            <Footer/>
          </main>
        </>
      );
}