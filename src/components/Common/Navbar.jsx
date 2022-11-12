import { NavLink } from "react-router-dom";

export const Navbar = ({ showNavbar, showMenu }) => {

  // const onLogout = () => {
  //   navigate('/login', {
  //     replace: true // Borra la ruta del historial para no poder regresar
  //   });
  // }

  return (
    <>    
      <nav className={`menu ${showNavbar && 'isActive'}`}>
        <button 
          className='menu__btn'
          onClick={showMenu}
        >
          X
        </button>

        <div className='menu__links'>
          <NavLink 
            end
            to="/"
            onClick={showMenu}
            className={ ({isActive}) => `nav__item ${ isActive ? 'active' : '' }`} 
          >
            Inicio
          </NavLink>

          <NavLink 
            to="/store"
            onClick={showMenu}
            className={ ({isActive}) => `nav__item ${ isActive ? 'active' : '' }`}
          >
            Tienda
          </NavLink>

          <NavLink 
            to="/blog"
            onClick={showMenu}
            className={ ({isActive}) => `nav__item ${ isActive ? 'active' : '' }`}
          >
            Blog
          </NavLink>

          <NavLink 
            to="/about"
            onClick={showMenu}
            className={ ({isActive}) => `nav__item ${ isActive ? 'active' : '' }`}
          >
            Sobre nosotros
          </NavLink>

          <NavLink 
            to="/contact"
            onClick={showMenu}
            className={ ({isActive}) => `nav__item ${ isActive ? 'active' : '' }`}
          >
            Contacto
          </NavLink>
        </div>
      </nav>
    </>
  )
};
