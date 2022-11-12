import { useState } from 'react';

import { useModal } from '../../hooks/useModal';

import { Navbar } from './Navbar';
import { ModalAuth } from '../modals/ModalAuth';

import { FiMail } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { IoSearchOutline } from 'react-icons/io5';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

import Logo from '../../assets/images/logo.svg';

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const [isOpenAuth, openModalAuth, closeModalAuth] = useModal(false);

  const showMenu = () => {
    setShowNavbar(!showNavbar);
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
              <FaUserAlt className='icon__menu' onClick={openModalAuth}/>
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

      <ModalAuth
        isOpen={isOpenAuth}
        closeModal={closeModalAuth}
      >
        <h2>LOGIN</h2>
      </ModalAuth>
    </>
  )
}
