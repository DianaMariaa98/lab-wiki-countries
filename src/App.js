import "./App.css";
import { Routes, Route } from 'react-router-dom';
import CountriesList  from './components/CountriesList';
import Navbar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path ="/" element ={<CountriesList />}/>
      <Route path ="/details/:id" element ={<CountryDetails />}/>
      </Routes>
      
      
    </div>
  )
}
export default App;
