import { ReactNode } from "react";

const App = () => {
    return(
        <div>
            <h1>Bienvenue dans mon application</h1>
            <Container titre="container d'elements">
                <p>voici un composant enfant</p>
            <Salutation nom="Dina" age={18}/>
            </Container>
            <Salutation nom="juguel" age={18}/>
            <Salutation nom="mohamed"  age= {17} />
        </div>
    )
}
export default App

type SalutationProps = {
    nom: string;
    age: number; // age est optionnel
};
const Salutation = ({nom, age}:SalutationProps) => {
    return <p>bonjour, { nom } ton age est : {age} ans</p>
}

type ContainerProps = {
    children: ReactNode
    titre:string
}
const Container = ({children, titre}:ContainerProps) => {
    return(
        <div style={{
            backgroundColor: "grey",
            color: "white",
            padding: "20px"
        }}>
            <h1> {titre} </h1>
            {children}
        </div>
    )
}