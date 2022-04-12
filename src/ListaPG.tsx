import { getStato } from './motore'
import { PG } from './tipiDati'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit'
import styles from './ListaPG.module.css'
import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts';

function RigaPG(props:{pg: PG, selected: boolean, onClick: () => void}) {

  return <ListItemButton
    className={styles.RigaPG}
    selected={props.selected}
    onClick={(e) => props.onClick()}  
  >
    <ListItemIcon className={styles.BoxTurno}></ListItemIcon>
    <ListItemText className={styles.BoxIniziativa}>{props.pg.iniziativa}</ListItemText>
    <ListItemText className={styles.BoxNome}>{props.pg.nome}</ListItemText>
    <ListItemIcon className={styles.BoxModifica} style={{display : props.selected ? "block" : "none"}}><EditIcon /></ListItemIcon>
  </ListItemButton>
}
export function ListaPG() {
  const ref = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function handleListItemClick(index: number) {
    setSelectedIndex(index)
  }
  const handleClickOutside = () => {
    setSelectedIndex(-1)
  }

  useOnClickOutside(ref, handleClickOutside)
  
  return <List ref={ref}>
    {getStato().dati.PGs.map((pg, i) => <RigaPG key={i} pg={pg} selected={selectedIndex == i} onClick={() => handleListItemClick(i)} />)}
  </List>
}
