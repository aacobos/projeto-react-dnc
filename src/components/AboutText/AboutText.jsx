// Importando os estilos do AboutText.css
import './AboutText.css'

// Importando
import { useContext } from "react"

// Context
import { AppContext } from '../../contexts/AppContext'

function AboutTex () {
    const appContext = useContext(AppContext)

    return (
        <div className='container'>
            <div className='text-section d-flex'>
                <div className='text-section-text'>
                    <h2>{appContext.languages[appContext.language].about.title}</h2>
                </div>
                <div className='text-section-text'>
                    <p className='primary-color'>{appContext.languages[appContext.language].about.p1}</p>
                    <p>{appContext.languages[appContext.language].about.p2}</p>
                    <p>{appContext.languages[appContext.language].about.p3}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutTex