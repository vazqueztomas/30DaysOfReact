const Input = (props) => <input type="text" placeholder = {props.placeholder}/>;
const Title = (props) => <h1>{props.title}</h1>;
const Subtitle = (props) => <h3>{props.subtitle}</h3>;
const Button = (props) => <button>{props.text}</button>;
const styleImages = {
  width: "500px",
};
const styleInput = {
  padding: "10px " ,
  border: "none",
  borderRadius: "10px",
};

const styleButton = {
  backgroundColor : '#fff'
}


const Level2 = (props) => {
  console.log(props);
 
  return (
    <div className="level2">
      <img src={props.src} alt="img" style={styleImages} />

      <div className="design">
        <Title title={"Subscribe"} />
        <Subtitle subtitle={"Sign up to receive news and updates."} />
        <div className="form">
          <Input style = {styleInput} placeholder = {'First name'}/>
          <Input style = {styleInput} placeholder = {'Last Namee'}/>
          <Input style = {styleInput} placeholder = {'email'}/>
        </div>
        <Button text="Suscribe" style = {styleButton}/>
      </div>
    </div>
  );
};

export default Level2;
