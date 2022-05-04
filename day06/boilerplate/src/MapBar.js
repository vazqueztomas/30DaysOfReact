import {tenHighestPopulation} from './data.js'
const Country = ({country: {country, population}}) => {
    return (
        <div style = {{display: 'flex', flexDirection: "row"}}>
            
        <li style={{listStyle: 'none', padding: "10px 120px"}}>{country}</li>
        <div></div>
        <li style={{listStyle: 'none', padding: "10px 120px"}}>{population}</li>        
        </div>
    )
}

const Countries = ({countries}) => { 
    const lista = countries.map((country) => (
        <Country key = {country.country} country = {country}/>
    ))

        return <div>{lista}</div>
}
const MapBar = () => {
    return(
    <div className="app">
        <h1>Country List</h1>
        <Countries countries = {tenHighestPopulation}/>
    </div>
    )
}

export default MapBar;