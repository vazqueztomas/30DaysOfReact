
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const firstName = 'Asabeneh'
const lastName = 'Yetayeh'
const date = 'Oct 3, 2020'

const Header = () => (
    <header>
        <div className="header-wrapper">
            <h1>{welcome}t</h1>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <p>{firstName}, {lastName}</p>
            <small>{date}</small>
        </div>
    </header>
)

export default Header;