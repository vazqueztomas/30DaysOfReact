

const Skill = ({skill : [tech, level]}) => (
    <li key = {tech}>
        {tech}: {level}
    </li>
)

const Skills = ({skills}) => {
    const skillList = skills.map((s) => <Skill key = {s}skill = {s}/>)
    console.log(skillList)
    return <ul>{skillList}</ul>
}

export default Skills