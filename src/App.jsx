// Referenciando os contexts que queremos na aplicação
import { useContext } from 'react'

// Importando o gerenciador de rotas (react-router-dom) que foi instalado 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// Importando as Pages e Components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

// Importando os utilitários da pasta criada "utils"
import ScrollToTop from './utils/ScrollTop'
import { AppContext } from './contexts/AppContext'

function App() {
  const appContext = useContext (AppContext)

  if (appContext.loading) {
    return <LoadingSpinner />
  }
  
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/contact' element={<Contact />}></Route>      
      </Routes>
    </Router>
  )
}

export default App
