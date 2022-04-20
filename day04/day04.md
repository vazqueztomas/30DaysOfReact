What is the difference between a regular function and an arrow function?
    - La diferencia entre una funcion regular y una arrow function es que, en primer lugar, se declaran de distintas maneras
        -> La arrow function se declara con const, mientras la funcion regular se declara con function
What is a React Component?
    - Un componente de React es una porción de código que se puede reutilizar cuantas veces se quiera.
How do you make a React functional component?
    - Para hacer un componente funcional en React, debemos declarar una función en Javascript y dentro ponerle el bloque de código.
What is the difference between a pure JavaScript function and a functional component?
    -Dentro de un componente funcional se puede integrar JSX, mientras que en una funcion pura de javascript, no.
How small is a React component?
    -Lo más chico que puede llegar a ser un componente es de una sola línea de código.
        -> const Button = () => <button>Soy un boton</button>
Can we make a button or input field component?
    ->const Button = () => <button>Soy un boton</button>
    ->const Input = () => <input type = 'text>
Make a reusable Button component.
    ->const Button = () => <button>Soy un boton</button>
Make a reusable InputField component.
    ->const InputField = () => <input type = 'text>
Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
    -> const AlertBox = () => {
        <div><p></p></div>
    }