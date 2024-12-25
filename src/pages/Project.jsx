// Importando os componentes utilizados na página
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"

// Importando
import { useContext } from "react"

// Context
import { AppContext } from '../contexts/AppContext'

function Project(){
    const appContext = useContext(AppContext)

    return(
        <>
            <Header />

            <Banner title={appContext.languages[appContext.language].menu.projects} image="banner-projects.svg" />
            <div className="container al-center">
                <ProjectsList />
            </div>

            <Footer />
        </>
    )
}

export default Project