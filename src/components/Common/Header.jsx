import { useState } from 'react';

import { useAuth, useModal } from '../../hooks';

import { Navbar } from './Navbar';
import { ModalAuth } from '../modals/ModalAuth';

import LoginForm from '../forms/LoginForm';
import ForgotForm from '../forms/ForgotForm';
import RegisterForm from '../forms/RegisterForm';

import { FiMail } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { IoSearchOutline } from 'react-icons/io5';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { IoLogOutSharp } from 'react-icons/io5';

import Logo from '../../assets/images/logo.svg';

export const Header = () => {
  const { user, logout } = useAuth();
  const [showNavbar, setShowNavbar] = useState(false);

  const [isOpenLogin, openModalLogin, closeModalLogin] = useModal(false);
  const [isOpenForgot, openModalForgot, closeModalForgot] = useModal(false);
  const [isOpenRegister, openModalRegister, closeModalRegister] = useModal(false);

  const showMenu = () => {
    setShowNavbar(!showNavbar);
  }

  const navigateModal = (name) => {
    switch (name) {
      case 'login':
        closeModalRegister();
        openModalLogin();
        break;
      case 'register':
        closeModalLogin();
        openModalRegister();
        break;
      case 'forgot':
        closeModalLogin();
        openModalForgot();
        break;
      case 'remember':
        closeModalForgot();
        openModalLogin();
        break
      default: return;
    }
  }

  return (
    <>
      <header className="header">
        <section className="container">
          <article className="contacts">
              <div className="contacts-group">
                <div className="contact__email">
                  <FiMail className="contact-email_icon" />
                  <a href="mailto:vaseprint@gmail.com">vaseprint@gmail.com</a>
                </div>
                <div className="contact__phone">
                  <TbBrandWhatsapp className="contact-wpp_icon" />
                  <div className='phones'>
                    <a href="tel:3167868590">316 786 8590</a>
                    <span>-</span>
                    <a href="tel:3188879062">318 887 9062</a>
                  </div>
                </div>
              </div>
              <div className="contacts__social">
                <AiFillFacebook className="contact-fa_icon" />
                <AiOutlineInstagram className="contact-ig_icon"  />
              </div>
          </article>
          <article className="main">
            <figure className="content__img">
              <img src={Logo} alt="logo vaseprint" />
            </figure>
            <div className="content__search">
              <IoSearchOutline className='search__icon' />
              <input className="searcher" type="text" placeholder='Busca tus productos' />
            </div>
            <div className='content__icons'>
              { user && <IoLogOutSharp className='icon__menu' size={24} onClick={logout} /> }              
              { !user && <FaUserAlt className='icon__menu' onClick={openModalLogin}/> }              
              <FaShoppingCart className='icon__menu'/>
              <GiHamburgerMenu 
                className='icon__menu'
                onClick={() => { setShowNavbar(!showNavbar) }}
              />
            </div>
          </article>

          <Navbar 
            showNavbar={showNavbar} 
            showMenu={showMenu}
          />
        </section>
      </header>

      {/* Modals Auth */}
      <ModalAuth
        isOpen={isOpenLogin}
        closeModal={closeModalLogin}       
      >
        <LoginForm navigateModal={navigateModal} closeModal={closeModalLogin} />
      </ModalAuth>
      <ModalAuth
        isOpen={isOpenRegister}
        closeModal={closeModalRegister}
      >
        <RegisterForm navigateModal={navigateModal} />
      </ModalAuth>
      <ModalAuth
        isOpen={isOpenForgot}
        closeModal={closeModalForgot}
      >
        <ForgotForm navigateModal={navigateModal} />
      </ModalAuth>
    </>
  )
}
