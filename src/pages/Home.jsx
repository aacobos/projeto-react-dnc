// Importando os componentes utilizados na página
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Hero from "../components/hero/Hero"
import ProjectsList from "../components/ProjectsList/ProjectsList"

function Home(){
    return(
        <>
            <Header />

            <div className="container al-center">
                <Hero />
                <ProjectsList />
            </div>

            <Footer/>
        </>
    )
}

export default Home