import styles from "./expoCard.module.css"

const ExpoCard= (props)=>{
    const {discipline,auteur,description,image,couleur,email} = props
    return(
        <div  className={styles.pictureCard+" w-61 mr-1"} >
        
                <div className={couleur+" h-full p-2 rounded-lg"}>
                        <h1 className= "text-right uppercase text-white font-bold text-lg ">{discipline}</h1>
                        <img className= "p-4 object-top w-220" src={image} alt=""/>
                        <p className= "font-bold text-base text-center pb-6">{auteur}</p>
                        <p className= "text-sm ">{email}</p>
                        <p className= "overflow-ellipsis overflow-hidden text-xs text-justify ">{description}</p>
                </div> 
            
        </div>
    )
}


export default ExpoCard

{/* <div className="w-48 bg-gray-200 text-center m-5">
			<span className="text-3xl">#{index}</span>
			<img className="w-32 mx-auto py-3" src={avatar_url} alt={`Profile of repository ${name}`}/>
			<div>
				<em className="text-lg font-bold text-red-700">{name}</em>
				<ul className="py-2">
					<li>{name}</li>
					<li>{stargazers_count} stars</li>
					<li>{forks} forks</li>
					<li>{open_issues} open issues</li>
				</ul>
			</div>
		</div> */}
