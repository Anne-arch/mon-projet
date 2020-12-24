//import text from "../../data"
import { useState, useEffect } from "react"
import expoUsers from "../../expoData"
import ExpoCard from "./expoCard"
import CoursChoix from  "C:/Users/stagiaire/Desktop/mon projet/applicationreact/src/components/courschoix/courschoix"

// const ExpoCardPage = ()=>{
   
//     return(
//         <div>
//             <CoursChoix/>
//         {/* <div className= "w-2/3 h-screen mx-auto flex "> 
//         <div className= "mt-6 mx-auto flex grid grid-flow-row auto-rows-max"> */}
//             <section className= " h-64 grid grid-cols-4 grid-flow-row gap-5 m-3">
//                 {expoUsers.map(user => (
//                     <ExpoCard
//                         discipline={user.class}
//                         image={user.img}
//                         auteur={user.name}
//                         email={user.email}
//                         description={user.about}
//                         couleur={user.color}
//                     />
//                 ))}
//             </section>
//         </div>
//     )
// }

const ExpoCardPage = () => {
	const [dbUsers, setdbUsers] = useState([])

	const getData = () => {
		fetch(
			"https://mongodb+srv://cda-admin:UMszZpaKwvsuD26G@cluster0.bdq04.mongodb.net/ecoleart-db?retryWrites=true&w=majority"
		)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setdbUsers(data.items)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
        <div>
        <CoursChoix/>
        <section className= " h-64 grid grid-cols-4 grid-flow-row gap-5 m-3">
				{dbUsers.map((user, index) => (
					<ExpoCard index={index + 1} key={user.id} info={user} />
				))}
			</section>
		</div>
	)
}

export  default ExpoCardPage