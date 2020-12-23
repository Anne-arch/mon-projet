// Composant ClassCard
// contient intitulé du cour
// enseignement 
import styles from "./classCard.module.css"


const classCard= (props)=>{
    //Destructuration de props
    
    const {titre,enseignement,image,nomProfesseur,couleur} = props
    return(
        <div >
        <div  className={styles.pictureCard} >
           <div className={couleur}>
           <h1 className= "p-4 text-left uppercase text-white font-bold text-lg ">{titre}</h1>
            <img className= "p-1 mx-auto object-top w-210" src={image} alt=""/>
            <p className="text-justify">{enseignement}</p>
            <p className="text-justify">{nomProfesseur}</p>
            </div> 
        </div>
        </div>
    )
}

export default classCard