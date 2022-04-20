const TechList = () => {
    const techs = [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACT",
        "FIREBASE",
        "MONGODB",
        "NODE",
        "PYTHON",
      ] 
    const techsFormatted = techs.map((tech) => <li key = {tech}>{tech}</li>)
    return techsFormatted;
    }

export default TechList;