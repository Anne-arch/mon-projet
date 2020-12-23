import text from "../../data"
import ClassCard from "./classCard"
//import text from "/../Data"
const ClassCardContainer = ()=>{
   
    return(
        
        // <div className= "w-2/3 h-screen mx-auto flex "> 
        <div className= "mt-6 mx-auto flex">
            <div className =" mr-8" > <ClassCard titre="dessin" enseignement={text} image ="elfe_lady.png" couleur="bg-indigo-300 rounded-lg"/> </div>
            <div className =" mr-8 "><ClassCard titre="Sculpture" enseignement={text} image ="peinture.jpg " couleur="bg-purple-400 rounded-lg"/></div>
            <div className ="mr-8"><ClassCard titre="Peinture" enseignement={text} image ="elfe_lady.png" couleur="bg-gray-400 rounded-lg"/></div>
            <div className ="mr-0" ><ClassCard titre="Gravure" enseignement={text} image =" gravure.jpg" couleur="bg-pink-300 rounded-lg"/></div>
        </div>
    )
}

export  default ClassCardContainer

// items-stretch