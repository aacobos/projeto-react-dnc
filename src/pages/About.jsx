// Importando os componentes utilizados na página
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import AboutTex from "../components/AboutText/AboutText"

// Importando
import { useContext } from "react"

// Context
import { AppContext } from '../contexts/AppContext'

function About(){
    const appContext = useContext(AppContext)

    return(
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.about} image="banner-about.svg"/>

            <AboutTex />

            <Footer/>
        </>
    )
}

export default About