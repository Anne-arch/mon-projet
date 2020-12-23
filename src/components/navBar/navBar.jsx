// rafce
// imp
import { NavLink } from "react-router-dom"


const NavBar = (props) => {
	return (
		<nav className="mt-2">
			<ul className='flex'>
				<li className='pr-2 font-bold text-lg'>
					<NavLink to='/' activeClassName='text-blue-700' exact>
						Cours
					</NavLink>
				</li>
				<li className='pr-2 font-bold text-lg'>
					<NavLink to='/expos' activeClassName='text-blue-700'>
						Expos
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
