// Importando os estilos do ContactForm.css
import './ContactForm.css'

// Importando os hookes de estado do react para fazer atualização e buscar Apis
import { useContext, useState, useEffect } from 'react'

// Importando o componente botão
import Button from '../Button/Button'

// Context
import { AppContext } from '../../contexts/AppContext'

function ContactForm () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const appContext = useContext(AppContext)
    
    const [isFormValid, setIsFormValid] = useState(false)

    const [formSubmitLoading, setFormSumbitLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isFormValid) {
            setFormSumbitLoading(true)
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...formData, access_key: "b171fbec-0727-4782-82e1-69de88bc978f" })
                })

                if (response.ok) {
                    setFormSubmitted(true)
                } else {
                    alert('Erro ao enviar!')
                }
            } catch (e) {
                alert('Erro: ', e)
            } finally {
                setFormSumbitLoading(false)
            }
        } 
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        }

        const isValid = formData.name.trim() && formData.email.trim() && isValidEmail(formData.email) && formData.message.trim()

        setIsFormValid(isValid)
    }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className='contact-form d-flex fd-column al-center'>
            <h2>{appContext.languages[appContext.language].contact.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="d-flex form-group">
                    <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder={appContext.languages[appContext.language].contact.pl1}
                        onChange={handleChange}
                    />

                    <input
                        className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder={appContext.languages[appContext.language].contact.pl2}
                        onChange={handleChange}
                    />                    
                </div>

                <div className="d-flex form-group">
                    <textarea 
                        className="form-input" 
                        id="message"
                        name="message"
                        placeholder={appContext.languages[appContext.language].contact.pl3}
                        rows="4"
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="al-center d-flex jc-end form-group">
                    {formSubmitted && <p className='text-primary'>{appContext.languages[appContext.language].contact.successMsg}</p>}
                    <Button type="submit" ButtonStyle="secondary" disabled={!isFormValid || formSubmitLoading}>
                        {appContext.languages[appContext.language].general.send}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm