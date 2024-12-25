import { createContext, useState, useEffect } from "react";

// Chamando a API
import { getApiData } from "../services/apiServices";


// Fazendo as chamadas do context
export const AppContext = createContext();

// Alterando o idioma para toda a aplicação usando uma API de idiomas
export const AppProvider = ({ children }) => {
    const savedLanguage = localStorage.getItem('lang');
    const [language, setLanguage] = useState(savedLanguage ?? 'br');
    const [languages, setLanguages] = useState({});
    const [loading, setLoading] = useState(true);


    // Chamada da API
    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const getTexts = await getApiData('webtext')
                setLanguages(getTexts)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        fetchLanguages()
    }, [])


    useEffect(() => {
        localStorage.setItem('lang', language)
    }, [language])

    return (
        <AppContext.Provider value={{ language, languages, setLanguage, loading }}>
            {children}
        </AppContext.Provider>
    )
}