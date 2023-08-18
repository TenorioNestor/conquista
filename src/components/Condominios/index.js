import * as React from 'react';
import styles from './styles.module.css'
import Button from '@mui/material/Button';
import Image from 'next/image'
import GarageIcon from '@mui/icons-material/Garage';


export default function Condominios() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.lista}>
            <h2>Condominio II</h2>
            <ul>
              <li>2 Vagas de Garagem</li>
              <li>Salao de Festas</li>
              <li>Elevador</li>
              <li>2 Quartos</li>
            </ul>
          </div>
          <div className={styles.imagem}>
            Imagem
          </div>
        </div>
        {/* <div>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>

        </div> */}

      </section>
    </>
  )
}