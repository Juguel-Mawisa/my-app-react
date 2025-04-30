
import { useState } from 'react'
type Props = {}
export default function Compteur({}: Props) {

    const [compteur, setCompteur] = useState(0)
    const [nom, setNom] = useState("juguel")
  
    const handleClick = () => {
        setCompteur(compteur + 1)
            
    };
    const handleDecrementer = () => {
        setCompteur(compteur - 1)
            
    };
  return (
    <div style={{backgroundColor:"#333", gap:10, width:400, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:10, color:"white"}}>
      <button
        onClick={handleDecrementer}
        >-</button>
        <h2>Nombre de fois : {compteur} </h2>
        <button
        onClick={handleClick}
        >+</button>
    </div>
  )
}