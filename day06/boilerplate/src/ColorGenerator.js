const ColorContainerStyle = {
  display: "inline-block",
  justifyContent: "center",
  alignItems: "center",
};

const EvenStyle = {
  backgroundColor: "green",
  color: "white",
  padding: "20px",
  width: "20px",
  height: "20px",
  margin: "1px auto",
  listStyle: "none",
};
const OddStyle = {
  backgroundColor: "yellow",
  color: "white",
  padding: "20px",
  width: "20px",
  height: "20px",
  margin: "1px auto",
  listStyle: "none",
};

const PrimeStyle = {
  backgroundColor: "red",
  color: "white",
  width: "20px",
  height: "20px",
  padding: "20px",
  margin: "1px auto",
  listStyle: "none",
};

const ListaStyle = {
  margin: "0 auto",
  display: 'grid',
  gridTemplateColumns: "repeat(10, 1fr)"
};

const esPrimo = (num) => {
  if (num == 0 || num == 1 || num == 4) return false;

  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      return false;
    }
    return true;
  }
};
const Box = ({ color }) => {
  const lista = color.map((col) => {
      let estilo = ""
    if (col % 2 == 0) {
      estilo = EvenStyle
    } else if (col % 2 == 1) {
      estilo = OddStyle
    }
    
    if (esPrimo(col)){
        estilo = PrimeStyle
    }


    return(<li key = {col}style = {estilo}>{col}</li>)
  });

  return lista;
};



const ColorGenerator = () => {
    let numbers = [];
    for (let x = 0; x < 31; x++) {
      numbers.push(x);
    }
  return (
    <div className="colorContainer" style={ColorContainerStyle}>
      <h1>Color Generator</h1>
      <h4>
        En verde los pares, en amarillo los impares y en rojo los números
        primos.
      </h4>
      <ul style={ListaStyle}>
        <Box color={numbers} />
      </ul>
    </div>
  );
};

export default ColorGenerator;
