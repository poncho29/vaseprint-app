import { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom"

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import carrusel1 from '../../assets/images/carrucel-1.png';
import carrusel2 from '../../assets/images/carrucel-2.png';

export const Slideshow = ({
    message = true.valueOf,
    controls = false, 
    autoplay = false, 
    speed = '500', 
    intervalo = '5000' 
  }) => {
  const slideshowRef = useRef(null);
  const intervalRef = useRef(null);

  const next = useCallback(() => {
    // Comprueba que el slideshow tenga elementos
    if(slideshowRef.current.children.length > 0) {
      // Obtiene el primer elemento
      const firstImg = slideshowRef.current.children[0];

      // Se establece la transicion del slidwshow
      slideshowRef.current.style.transition = `${speed}ms ease-out all`;

      const sizeSlide = slideshowRef.current.children[0].offsetWidth;

      // Se mueve el slideshow
      slideshowRef.current.style.transform = `translateX(-${sizeSlide}px)`;

      const transicion = () => {
        // Se reinicia la posicion del slideshow
        slideshowRef.current.style.transition = 'none';
        slideshowRef.current.style.transform = `translateX(0)`;

        // Se mueve el primer elemento al final
        slideshowRef.current.appendChild(firstImg);

        slideshowRef.current.removeEventListener('transitionend', transicion);
      }

      // Evento para cuando finaliza la animación
      slideshowRef.current.addEventListener('transitionend', transicion);
    }
  }, [speed]);
  
  const back = () => {
    console.log('back');
    if(slideshowRef.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideshow
      const index = slideshowRef.current.children.length -1;
      const lastImg = slideshowRef.current.children[index];
      slideshowRef.current.insertBefore(lastImg, slideshowRef.current.firstChild);

      slideshowRef.current.style.transition = 'none';

      const sizeSlide = slideshowRef.current.children[0].offsetWidth;
      slideshowRef.current.style.transform = `translateX(-${sizeSlide}px)`;

      setTimeout(() => {
        slideshowRef.current.style.transition = `${speed}ms ease-out all`;
        slideshowRef.current.style.transform = `translateX(0)`;
      }, 30)
    }
  }

  useEffect(() => {
    if(autoplay) {
      // Inicia autoplay del slideshow
      intervalRef.current = setInterval(() => {
        next();
      }, intervalo);
  
      // Detiene el autoplay del slideshow
      slideshowRef.current.addEventListener('mouseenter', () => {
        console.log('enter')
        clearInterval(intervalRef.current);
      })
  
      // Reiniciar el autoplay del slideshow
      slideshowRef.current.addEventListener('mouseleave', () => {
        console.log('leave')
        intervalRef.current = setInterval(() => {
          next();
        }, intervalo);
      })
    }
  }, [autoplay, intervalo, next]);

  return (
    <div className="slideshow">
      <div
        ref={slideshowRef}
        className="content__slideshow"
      >
        <div className="slide">
          <Link to="/">
            <img src={carrusel1} alt="portatil hp" />
          </Link>
          {
            message &&
              <div  className="slide__text">
                <p>15% de descuesto en productos apple</p>
              </div>
          }
        </div>
        <div className="slide">
          <Link to="/">
            <img src={carrusel2} alt="portatil hp" />
          </Link>
          {
            message &&
              <div  className="slide__text">
                <p>15% de descuesto en productos apple</p>
              </div>
          }
        </div>
        {/* <div className="slide">
          <Link to="/">
            <img src={img3} alt="portatil hp" />
          </Link>
          {
            message &&
              <div  className="slide__text">
                <p>15% de descuesto en productos apple</p>
              </div>
          }
        </div> */}
      </div>

      { controls &&
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
      }
    </div>
  )
}