// Importando os estilos do Hero.css
import './Hero.css'

// Importando
import { useContext } from "react"

// Importando componentes
import Button from '../Button/Button'

// Importando o Link para direcionar o usuário para outa página quando clicar no botão
import { Link } from 'react-router-dom'

// Context
import { AppContext } from '../../contexts/AppContext'

function Hero () {
    const appContext = useContext(AppContext)
    
    return (
        <div className='hero d-flex al-center'>
            <div className='hero-text'>
                <h1>{appContext.languages[appContext.language].hero.title}</h1>
                <p>{appContext.languages[appContext.language].hero.subtitle}</p>
                <Link>
                    <Button ButtonStyle="secondary" arrown>
                    {appContext.languages[appContext.language].hero.cta}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero