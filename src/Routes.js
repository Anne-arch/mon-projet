
import {Route} from "react-router-dom"

import ExpoCardPage from "C:/Users/stagiaire/Desktop/mon projet/applicationreact/src/components/expo/expoCardPage"
import ClassCardContainer from "C:/Users/stagiaire/Desktop/mon projet/applicationreact/src/components/cours/classCardContainer"
import FormulaireExpoPage from "C:/Users/stagiaire/Desktop/mon projet/applicationreact/src/components/formulaireExpo/formulaireExpoPage"
//import ExpoDessinCardPage from "C:/Users/stagiaire/Desktop/mon projet/applicationreact/src/pages/pageexpo/expoDessinCardPage"

const Routes = () => {
	return (
		<>
            <Route path='/expos'>
                <ExpoCardPage/>
            </Route>
            {/* <Route path='/expos/dessin'>
                <ExpoExpoCardPage/>
            </Route> */}
            <Route path='/exposants'>
                <FormulaireExpoPage/>
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

//https://reactrouter.com/web/api/Hooks/useparams