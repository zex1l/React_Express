import {
    Routes,
    Route,
} from "react-router-dom";

import './styles/style.css'

import Home from './Pages/Home'
import AuthPage from "./Pages/AuthPage";
import Header from "./components/Header";


const App = () => {


  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
        </Routes>
    </>
  );
}
export default App;
