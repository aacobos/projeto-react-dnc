import { Link } from "react-router-dom"

// Importando o hook que será usado na barra de menu para responsividade
import { useContext, useState } from "react"

// Importando as imagens que estão na pasta Assets
import Logo from '../../Assets/dnc-logo.svg'

// Importando os estilos do Header.css
import './Header.css'

// Importando o componente "Button"
import Button from '../Button/Button'

// Context
import { AppContext } from '../../contexts/AppContext'

function Header () {
    const[isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const appContext = useContext(AppContext)
        
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={ Logo } /></Link>

                    <div className="mobile-menu">
                        <Button ButtonStyle='secondary' onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>

                    <nav className={`${isOpen ? 'open': ''}`}>
                        <Button ButtonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>
                            X
                        </Button>
                        <ul className="d-flex">
                            <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                            <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                            <li><Link to="/project">{appContext.languages[appContext.language].menu.projects}</Link></li>
                            <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header