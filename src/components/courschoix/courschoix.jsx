import { useState } from "react"

const CoursChoix = () => {
	const categories = ["Cours", "Dessin", "Sculpture", "Peinture","Gravure"]

	const [selectedCategory, setSelectedCategory] = useState("Cours")

	const activedCategory = (art) => {
		setSelectedCategory(art)
	}
	return (
		<ul className='flex justify-center'>
			{categories.map((category, index) => {
				let active = ""
				if (category === selectedCategory) {
					active = "text-blue-700"
				}
				return (
					<li
						key={index}
						className={`p-2 font-bold text-lg cursor-default ${active}`}
						onClick={() => activedCategory(category)}
					>
						{category}
					</li>
				)
			})}
		</ul>
	)
}

export default CoursChoix
