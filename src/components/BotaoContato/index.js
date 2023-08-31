import * as React from 'react';
import Link from 'next/link'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fab from '@mui/material/Fab';
import styles from './styles.module.css'



export default function BotaoContato(){
    return(
        <>
            <button className={styles.button}>
                <Fab variant="extended">
                    <WhatsAppIcon sx={{ mr: 1 }} />
                    Vamos conversar
                </Fab>
            </button>
        </>
    )
}