import { openInNewTab } from '../../utils';

import { FiMail } from 'react-icons/fi';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

import Logo from '../../assets/images/logo-vp-white.svg';

export const Footer = () => {
  return (
    <div className='footer'>
      <section className='container'>
        <div className='footer__company'>
          <figure className='company__img'>
            <img src={Logo} alt="logo vaseprint" />
          </figure>

          <ul className='company__list'>
            <li className='list__item'>Crr 14 N° 11-36</li>
            <li className='list__item'>Socorro, Santander</li>
            <li className='list__item'>vaseprint@gmail.com</li>
            <li className='list__item'>316 786 8590 - 318 887 9062</li>
          </ul>
        </div>
        
        <div className='footer__schedule'>
          <h5 className='schedule__title'>horario</h5>
          
          <ul className="schedule__week">
            <li className="schedule__item schdule__item--title">Lunes a Viernes</li>
            <li className="schedule__item">8:00 a.m - 12:00 m</li>
            <li className="schedule__item">2:00 p.m - 6:00 p.m</li>
          </ul>

          <ul className='schedule__week'>
            <li className="schedule__item schdule__item--title">Sábados</li>
            <li className="schedule__item">8:00 a.m - 12:00 m</li>
            <li className="schedule__item">2:00 p.m - 5:00 p.m</li>
          </ul>
        </div>

        <div className='footer__media'>
          <FiMail className='icon__media'/>
          <TbBrandWhatsapp className='icon__media'/>
          <AiFillFacebook
            className='icon__media'
            onClick={() => openInNewTab('https://www.facebook.com/vaseprint')}
          />
          <AiOutlineInstagram
            className='icon__media'
            onClick={() => openInNewTab('https://www.instagram.com/vase_print/?next=%2F')}
          />
        </div>
      </section>
    </div>
  )
};
