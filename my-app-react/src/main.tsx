
import { createRoot } from 'react-dom/client'
import"./index.css"
import App from './app'

// const Welcome = () =>{
//         const nom = "juguel"
//         const age = 18
//     return(
//         <div>
//         <h2>bienvenu {nom === "juguel"? "juguel programme" : "inconnu"} dans mon application</h2>
//         <p>voici un paragraphe</p>
//         {
//                 age >= 18 ? <p>Vous êtes majeur</p> : <p>Vous êtes mineur</p>
//         }
//         <Test/>
//         </div>
//     )    
// }
// const Test = () => {
//    return     <h1>voici un test</h1>
// } 
createRoot(document.querySelector("#root")!).render(
       <>

         <App/>
        
       </>
)
