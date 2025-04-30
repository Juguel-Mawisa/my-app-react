import { ReactNode } from "react";
import CarteUtilisateur from "./composants/CarteUtilisateur";
import Compteur from "./composants/Compteur";

const App = () => {
    const utilisateurs = [
        {
            id: 1,
            nom: "juguel",
            age: 20,
        },
        {
            id: 2,
            nom: "Ferto",
            age: 35,
        },
        {
            id: 3,
            nom: "Obed",
            age: 17,
        },
        {
            id: 4,
            nom: "Percy",
            age: 30,
        }
    ]
    return(
        <div>
            <h1>Les evenements en react</h1>
            <Compteur/>
            <Compteur/>
            <Compteur/>
            <Compteur/>
            {

                // utilisateurs.map(u =>( 
                //    <CarteUtilisateur utilisateur={u}
                //    key={u.id}/>
                   
                // ))
            }
           
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