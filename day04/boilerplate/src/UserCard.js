import avatar from './images/foto1.jpg'

// styles

const wrapperinfoStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

const importantInfoStyle = {
  textAlign: "center"
}

const skillsStyle = {
  listStyle : "none",
  backgroundColor: "#5dc460",
  padding: "10px",
  margin: "5px"
}

const containerSkillsStyle = {
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  padding : "0 auto"
}

const divSkillsStyle = {
  width: "30%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}

const imgStyle = {
  width: "20%"
}

let nombre = "Tomás"
let profesion = "Frontend Developer"
let techs = ["Javascript", "Python", "React"];
let techsFormatted = techs.map((tech) => <li key = {tech} style = {skillsStyle}>{tech}</li>)

const UserCard = () => (
  <div className="userCard" style = {wrapperinfoStyles}>
    <div className="info" style = {importantInfoStyle}>
      <img src={avatar} alt="prueba" style = {imgStyle}/>
      <h2>{nombre}</h2>
      <p>{profesion}</p>
    </div>
    <div className="skills" style = {divSkillsStyle} >
      <h3>SKILLS</h3>
      <ul style = {containerSkillsStyle}>
        {techsFormatted}
      </ul>
    </div>
    <small>Date</small>
  </div>
);

export default UserCard;
