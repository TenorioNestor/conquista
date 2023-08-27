import styles from './styles.module.css'

export default function Banner(){
  const sobre = true;
  const color = 'sobre';
  if(sobre == false){
    color = 'contatos'
  }
    return(
        <>
          <div className={styles.''}>
            <h1>Sobre Nós</h1>
          </div>

        </>
    )
}