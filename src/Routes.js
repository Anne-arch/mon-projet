
import {Route} from "react-router-dom"

import ExpoCardPage from "C:/Users/stagiaire/Desktop/mon projet/applicationreact/src/components/expo/expoCardPage"
import ClassCardContainer from "C:/Users/stagiaire/Desktop/mon projet/applicationreact/src/components/cours/classCardContainer"

const Routes = () => {
	return (
		<>
            <Route path='/expos'>
                <ExpoCardPage/>
            </Route>
            {/* <Route path='/login'>
                <Login />
            </Route> */}
            <Route path='/' exact>
                <ClassCardContainer/>
            </Route>
            {/* <Route>
                <p>Page introuvable 404</p>
            </Route> */}
		</>
	)
}

export default Routes