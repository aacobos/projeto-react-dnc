// Importando os componentes utilizados na página
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ContactForm from "../components/ContactForm/ContactForm"

// Importando
import { useContext } from "react"

// Context
import { AppContext } from '../contexts/AppContext'

function Contact(){
    const appContext = useContext(AppContext)

    return(
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.contact} image="banner-contact.svg"/>
            
            <div className="container">
                <ContactForm />
            </div>

            <Footer />
        </>
    )
}

export default Contact