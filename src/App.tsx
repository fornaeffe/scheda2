import { useMotore, getStato, aggiornaDati, setAutoSave } from './motore';
import { ListaPG } from './ListaPG';
import { ApriDati, AutoSaveSwitch, SalvaDati } from './storage';
import styles from './App.module.css'

function App() {
  useMotore()

  return (
    <div className={styles.App}>
      <div className={styles.BarraStorage}>
        <ApriDati aggiornaDati={aggiornaDati} />
        <SalvaDati dati={getStato().dati} />
        <AutoSaveSwitch value={getStato().autoSave} onChange={setAutoSave}/>
      </div>
      <div className={styles.ContenutoPrincipale}>
        <ListaPG />
      </div>
            
    </div>
  );
}

export default App;
