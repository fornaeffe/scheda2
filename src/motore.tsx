import { useEffect, useState } from "react"
import { scriviFile } from "./storage"
import { Dati } from "./tipiDati"

const evento = new Event('cambioStato')


export function useMotore() {
	const [, refresh] = useState({})
	useEffect(() => osservaStato(() => refresh({})))
}


export function osservaStato(x: () => void) {
	const listener: EventListener = e => x()
	document.body.addEventListener(evento.type, listener)
	return () => document.body.removeEventListener(evento.type, listener)
}

export function setStato(s: Stato) {
	stato = s
	document.body.dispatchEvent(evento)
}

  type Stato = {
    autoSave: boolean
    dati: Dati
  }
  
  const dati_iniziali : Dati = {
    PGs: []
  }
  
  const stato_iniziale : Stato = {
    autoSave: false,
    dati: dati_iniziali
  }

let stato = stato_iniziale

export function setAutoSave() {
  setStato({...stato, autoSave: !stato.autoSave})
}

export function getStato() {
	return stato
}

export function aggiornaDati(s: Dati) {
  setStato({...stato, dati: s})
  if (stato.autoSave)
    scriviFile(s)
}