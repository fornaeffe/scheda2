import { getStato } from './motore'
import { PG } from './tipiDati'
import EditIcon from '@mui/icons-material/Edit'
import styles from './ListaPG.module.css'
import { useState } from 'react'

function RigaPG(props:{pg: PG}) {
  const [over, setOver] = useState(false)

  return <div className={styles.RigaPG} onMouseEnter={(e) => setOver(true)} onMouseLeave={(e) => setOver(false)}>
    <div className={styles.BoxTurno}></div>
    <div className={styles.BoxIniziativa}>{props.pg.iniziativa}</div>
    <div className={styles.BoxNome}>{props.pg.nome}</div>
    <div className={styles.BoxModifica} style={{display : over ? "block" : "none"}}><EditIcon /></div>
  </div>;
}
export function ListaPG() {
  return <div className={styles.ListaPG}>
    {getStato().dati.PGs.map((pg, i) => <RigaPG key={i} pg={pg} />)}
  </div>;
}
