import { NavLink } from "react-router-dom";

import { useAuth } from "../../hooks";

import { AiFillCloseSquare } from 'react-icons/ai';

export const Navbar = ({ showNavbar, showMenu }) => {
  const { user } = useAuth();

  return (
    <>    
      <nav className={`menu ${showNavbar && 'isActive'}`}>
        <button 
          className='menu__btn'
          onClick={showMenu}
        >
          <AiFillCloseSquare size={24} />
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

          {
            user &&
            <NavLink 
              to="/admin"
              onClick={showMenu}
              className={ ({isActive}) => `nav__item ${ isActive ? 'active' : '' }`}
            >
              Admin
            </NavLink>
          }
        </div>
      </nav>
    </>
  )
};
