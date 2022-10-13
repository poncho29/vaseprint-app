import { Link } from "react-router-dom"

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import img1 from '../../assets/images/1.jpeg';
import img2 from '../../assets/images/2.jpeg';
import img3 from '../../assets/images/3.jpeg';

export const Slideshow = () => {
  return (
    <div className="slideshow">
      <div className="content__slideshow">
        <div className="slide">
          <Link to="/">
            <img src={img1} alt="portatil hp" />
          </Link>
          <div  className="slide__text">
            <p>15% de descuesto en productos apple</p>
          </div>
        </div>
        <div className="slide">
          <Link to="/">
            <img src={img2} alt="portatil hp" />
          </Link>
          <div  className="slide__text">
            <p>15% de descuesto en productos apple</p>
          </div>
        </div>
        <div className="slide">
          <Link to="/">
            <img src={img3} alt="portatil hp" />
          </Link>
          <div className="slide__text">
            <p>15% de descuesto en productos apple</p>
          </div>
        </div>
      </div>

      <div className="controls__slideshow">
        <button className="btn__slide btn__left">
          <IoIosArrowBack size={'28px'} color={'#FFF'} />
        </button>
        <button className="btn__slide btn__right">
          <IoIosArrowForward size={'28px'} color={'#FFF'} />
        </button>
      </div>
    </div>
  )
}
