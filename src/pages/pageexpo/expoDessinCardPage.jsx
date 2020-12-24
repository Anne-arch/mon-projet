import expoUsers from "../../expoData"
import ExpoCard from "C:/Users/stagiaire/Desktop/mon projet/applicationreact/src/components/expo/expoCard"
import CoursChoix from  "C:/Users/stagiaire/Desktop/mon projet/applicationreact/src/components/courschoix/courschoix"

const ExpoDessinCardPage = ()=>{
   
    return(
        <div>
            <CoursChoix/>
        {/* <div className= "w-2/3 h-screen mx-auto flex "> 
        <div className= "mt-6 mx-auto flex grid grid-flow-row auto-rows-max"> */}
            <section className= " h-64 grid grid-cols-4 grid-flow-row gap-5 m-3">
                {expoUsers.map(user => (
                    <ExpoCard
                        discipline={user.class}
                        image={user.img}
                        auteur={user.name}
                        email={user.email}
                        description={user.about}
                        couleur={user.color}
                    />
                ))}
            </section>
        </div>
    )
}

export default ExpoDessinCardPage