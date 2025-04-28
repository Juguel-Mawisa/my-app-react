

type Props = {
    utilisateur:{
        id:number
        nom:string
        age:number
    }
}

export default function CarteUtilisateur({utilisateur}: Props) {
  return (
    <div style={{padding:4, backgroundColor:"green", marginBottom:6}}>
    <p> {utilisateur.nom} - {utilisateur.age} </p>

</div>
  )
}