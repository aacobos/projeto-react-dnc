// Importando as imagens que estão na pasta Assets
import WhiteArrow from '../../assets/element-white-arrow.svg'

// Importando os estilos do Button.css
import './Button.css'

function Button ({ arrow, ButtonStyle, loading, children, ...props }) {
    return (
        <button className={`button ${ButtonStyle}`} {...props}>
            {children} {arrow && <img src={WhiteArrow}/>}

        </button>
    )
}

export default Button