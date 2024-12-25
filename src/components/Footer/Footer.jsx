// Referenciando os contexts que queremos na aplicação
import { useContext } from 'react'

import { Link } from "react-router-dom"

// Importando as imagens que estão na pasta Assets
import Logo from '../../Assets/dnc-logo.svg'
import BrazilIcon from '../../Assets/flag-brazil.svg'
import UsaIcon from '../../Assets/flag-usa.svg'
import FacebookIcon from '../../Assets/icon-facebook.svg'
import LinkedinIcon from '../../Assets/icon-linkedin.svg'
import InstagramIcon from '../../Assets/icon-instagram.svg'
import TwitterIcon from '../../Assets/icon-twitter.svg'

// Importando os estilos do Footer.css
import './Footer.css'

// Importando componentes
import Button from '../Button/Button'

// Importando o context
import { AppContext } from '../../contexts/AppContext'

function Footer () {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }

    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div>
                        <img src={ Logo } className="footer-logo"/>
                        <p className="grey-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="d-flex social-links">
                            <a href="https://google.com" target="_blank"><img src={FacebookIcon} /></a>
                            <a href="https://google.com" target="_blank"><img src={TwitterIcon} /></a>
                            <a href="https://google.com" target="_blank"><img src={LinkedinIcon} /></a>
                            <a href="https://google.com" target="_blank"><img src={InstagramIcon} /></a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/project">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <Button ButtonStyle="unstyled" onClick={() => changeLanguage('br')}>
                            <img src={ BrazilIcon } height="39px"/>
                        </Button>
                        <Button ButtonStyle="unstyled" onClick={() => changeLanguage('en')}>
                            <img src={ UsaIcon } height="39px"/>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer