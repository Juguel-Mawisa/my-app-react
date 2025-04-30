import { ReactNode} from "react";
import CarteUtilisateur from "./composants/CarteUtilisateur";
import Compteur from "./composants/Compteur";
import {useState,useEffect} from "react"
type Props = {}
const App = () => {
    const [compteur, setCompteur] = useState(0)
   
    useEffect(() => {
        document.title = `Vous avez cliqué ${compteur} fois`
    }, [compteur])
    return(
        <div>
            <h1>Les effets en react</h1>
        <div>
            <button onClick={() =>setCompteur(compteur + 1)}>Incrémenter</button>
            <h3>Compteur : {compteur}</h3>
        </div>
           
        </div>
    )
}
export default App

// type SalutationProps = {
//     nom: string;
//     age: number; // age est optionnel
// };
// const Salutation = ({nom, age}:SalutationProps) => {
//     return <p>bonjour, { nom } ton age est : {age} ans</p>
// }

// type ContainerProps = {
//     children: ReactNode
//     titre:string
// }
// const Container = ({children, titre}:ContainerProps) => {
//     return(
//         <div style={{
//             backgroundColor: "grey",
//             color: "white",
//             padding: "20px"
//         }}>
//             <h1> {titre} </h1>
//             {children}
//         </div>
//     )
// }