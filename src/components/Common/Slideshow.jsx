import { useRef } from "react";
import { Link } from "react-router-dom"

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import img1 from '../../assets/images/1.jpeg';
import img2 from '../../assets/images/2.jpeg';
import img3 from '../../assets/images/3.jpeg';

export const Slideshow = () => {
  const slideshowRef = useRef(null);

  const next = () => {
    if(slideshowRef.current.children.length > 0) {
      const firstImg = slideshowRef.current.children[0];

      slideshowRef.current.style.transition = `1000ms ease-out all`;

      const sizeSlide = slideshowRef.current.children[0].offsetWidth;

      slideshowRef.current.style.transform = `translateX(-${sizeSlide}px)`;

      const transition = () => {
        slideshowRef.current.style.transition = 'none';
        slideshowRef.current.style.transform = `translateX(0)`;

        slideshowRef.current.appendChild(firstImg);
      }

      slideshowRef.current.addEventListener('transitionend',transition);
    }
  }
  
  const back = () => {
    console.log('back');
  }

  return (
    <div className="slideshow">
      <div
        ref={slideshowRef}
        className="content__slideshow"
      >
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
        <button 
          onClick={back}
          className="btn__slide btn__left"
        >
          <IoIosArrowBack size={'28px'} color={'#FFF'} />
        </button>
        <button
          onClick={next}
          className="btn__slide btn__right"
        >
          <IoIosArrowForward size={'28px'} color={'#FFF'} />
        </button>
      </div>
    </div>
  )
}
