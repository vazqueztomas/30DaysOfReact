import './Level2.css'
const Input = (props) => <input type="text" placeholder = {props.placeholder}/>;
const Title = (props) => <h1>{props.title}</h1>;
const Subtitle = (props) => <h3>{props.subtitle}</h3>;
const Button = (props) => <button>{props.text}</button>;

const Level2 = (props) => {
  console.log(props);
  
  
  const styleButton = {
    backgroundColor : '#fff'
  }
  
  return (
    <div className="level2">
      <img src={props.src} alt="img" className = 'image' />

      <div className="design">
        <Title title={"Subscribe"} />
        <Subtitle subtitle={"Sign up to receive news and updates."} />
        <div className="form">
          <Input className='input-style' placeholder = {'First name'}/>
          <Input className='input-style' placeholder = {'Last Namee'}/>
          <Input className='input-style' placeholder = {'email'}/>
        </div>
        <Button text="Suscribe" style = {styleButton}/>
      </div>
    </div>
  );
};

export default Level2;
