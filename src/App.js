//import logo from './logo.svg';
import './App.css';
//import classeCard from "./components/cours/classeCard"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./Routes"
//import ClasseCardContainer from "C:/Users/stagiaire/Desktop/mon projet/applicationreact/src/components/cours/classCardContainer"
import NavBar from  "C:/Users/stagiaire/Desktop/mon projet/applicationreact/src/components/navBar/navBar"
//import ExpoCardPage from "C:/Users/stagiaire/Desktop/mon projet/applicationreact/src/components/expo/expoCardPage"

function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );

    return (
      <>
      	<Router>
          <NavBar/>
					<Routes />
		    </Router>
        
        {/* <ClasseCardContainer/>
        <ExpoCardPage/> */}

      </>
    )
  }

export default App;
