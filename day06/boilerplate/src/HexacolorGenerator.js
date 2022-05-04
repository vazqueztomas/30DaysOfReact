const getHexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const Color = ({ color }) => {
  const colorList = color.map((color) => (
    <li key = {color}
      style={{
        background: color,
        padding: "20px",
        width: "40px",
        height: "40px",
        listStyle: "none",
        display: "inline-block",
        margin: "2px",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      {color}
    </li>
  ));
  return colorList;
};

const HexaColorGenerator = () => {
  const miLista = [];
  for (let i = 0; i < 30; i++) {
    miLista.push(getHexaColor());
  }
  return (
    <div className="app">
      <h1>30 days of React</h1>
      <p>HExadecimal Colors</p>
      <Color color={miLista}></Color>
    </div>
  );
};

export default HexaColorGenerator;
