const Header = (props) => {
  console.log(props);
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  );
};

// boolean type in props
const Status = (props) => {
  console.log(props, "boolean");
  let status = props.status
    ? "Sos mayor de edad, podes conducir"
    : "Sos menor de edad, esperá a cumplir 18.";
  return <p>{status}</p>;
};

const Skills = (props) => {
  console.log(props);
  const skillsFormateadas = props.skills.map((s) => <li key={s}>{s}</li>);
  console.log(skillsFormateadas);
  return <ul>{skillsFormateadas}</ul>;
};

const Primitives = () => {
  const welcome = "Welcome to 30 Days Of React";
  const title = "Getting Started React";
  const subtitle = "JavaScript Library";
  const firstName = "Asabeneh";
  const lastName = "Yetayeh";
  const date = "Oct 4, 2020";

  let añoActual = 2022;
  let añoCumpleaños = 2000;
  const age = añoActual - añoCumpleaños;

  let status = age >= 18;

  const skills = ["HTML", "CSS", "JAVASCRIPT"];

  return (
    <div className="primitive">
      <Header
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
      />
      <Status status={status} />

      <Skills skills={skills} />
    </div>
  );
};

export default Primitives;