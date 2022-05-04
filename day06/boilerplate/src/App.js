// import Countries from "./arrays/ArrayObj";
import Skills from "./arrays/Arrays";
import ColorGenerator from "./ColorGenerator";
import HexaColorGenerator from "./HexacolorGenerator";
import MapBar from "./MapBar";
import {tenHighestPopulation} from './data.js'

const Numbers = ({ numbers }) => {
  const list = numbers.map((number) => <li key = {number}>{number}</li>);
  return list;
};

// Array comun
const skills = [['HTML', 10], ['CSS', 8], ['JAVASCRIPT', 12000]]
// Array de objeto
const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({country: {name, city}}) => {
  return(
  <div>
      <h1>{name}</h1>
      <p>{city}</p>
  </div>)
}


// Countries component 
const Countries = ({countries}) => {
  const countriesList = countries.map((c) => <Country key = {c.name} country = {c}/>)
  return <div>{countriesList}</div>
}

function App() {
  const numbers = [1,2,3,4,5]
  return (
    <div className="App">
      <h1>Number list</h1>
      <Numbers numbers = {numbers}/>
      <Skills skills = {skills}/>
      <Countries countries = {countries}/>

      <ColorGenerator/>
      <HexaColorGenerator/>
      <MapBar/>
    </div>
  );
}

export default App;
