type SalutationProps = {
    nom: string;
    age: number; // age est optionnel
};
const Salutation = ({nom, age}:SalutationProps) => {
    return <p>bonjour, { nom } ton age est : {age} ans</p>
}
export default Salutation