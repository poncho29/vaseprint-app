import { useState } from 'react';

import { Navbar } from './Navbar';

import { FiMail } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { IoSearchOutline } from 'react-icons/io5';

import Logo from '../../assets/images/logo.svg';

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const showMenu = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <header className="header">
      <section className="container">
        <article className="contacts">
            <div className="contact__email">
              <FiMail size={'18px'} />
              <a href="mailto:vaseprint@gmail.com">vaseprint@gmail.com</a>
            </div>
            <div className="contact__phone">
              <TbBrandWhatsapp size={'18px'} />
              <div className='phones'>
                <a href="tel:3167868590">316 786 8590</a>
                <span>-</span>
                <a href="tel:3188879062">318 887 9062</a>
              </div>
            </div>
            {/* <div className="contac__social">
              <span>F</span>
              <span>I</span>
            </div> */}
        </article>
        <article className="main">
          <figure className="content__img">
            <img src={Logo} alt="logo vaseprint" />
          </figure>
          <div className="content__search">
            <IoSearchOutline className='search__icon' size={'12px'} />
            <input className="searcher" type="text" placeholder='| Busca tus productos' />
          </div>
          <div className='content__icons'>
            <FaUserAlt 
              style={{ cursor: 'pointer' }}
            />
            <FaShoppingCart 
              style={{ cursor: 'pointer' }}
            />
            <GiHamburgerMenu 
              style={{ cursor: 'pointer' }}
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
  )
}
