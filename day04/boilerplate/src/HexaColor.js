// Level 3 resuelto     


const HexaColor = () => {
  const getHexaColor = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  };

  const hexaStyles = {
    backgroundColor: getHexaColor(),
    textAlign: 'center',
    padding: '10px',
    margin: '5px'
  };

  const randomColor = getHexaColor();
  return (
    <div style={hexaStyles}>
      <h1>{randomColor}</h1>
    </div>
  );
};

export default HexaColor;
