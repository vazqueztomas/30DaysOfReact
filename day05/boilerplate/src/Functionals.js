const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// RECORDAR : Los eventos que se hacen presente en html, en React tambien estan, a diferencia que se escriben en CamelCase


const Functionales = () => {

    const saludar = () => {
        alert('bienvenidos al 30 dias de react!')
    }

    return(
        <div className="app">
            <Button onClick = {() => alert('Hola!')} text = 'Boca boca'/>
            <Button onClick = {saludar} text = 'Saludar gente' />
            <Button onClick = {() => alert(new Date())} text = 'Mostrar fecha'/>

        </div>
    )
}

export default Functionales