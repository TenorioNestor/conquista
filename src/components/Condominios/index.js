import * as React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image'
import GarageIcon from '@mui/icons-material/Garage';


export default function Condominios() {
  return (
    <>
      <section>
        <div>
          <div>
            <h2>Condominio II</h2>
            <ul>
              <li>2 Vagas de Garagem</li>
              <li>Salao de Festas</li>
              <li>Elevador</li>
              <li>2 Quartos</li>
            </ul>
          </div>
          <div>Imagem</div>
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