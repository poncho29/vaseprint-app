import { Slideshow } from "../components"

import Card from "../components/common/Card";
import { CardTip } from "../components/home/CardTip";

import Mouse from '../assets/images/mouse-genius-dx-120-usb.png';
import Epson from '../assets/images/epson.png';
import Tip from '../assets/images/tip.png';
import Adata from '../assets/images/logo-adata.png';
import Genius from '../assets/images/logo-genius.png';
import Logitech from '../assets/images/logo-logitech.png';
import Kingston from '../assets/images/logo-kingston.png';
import LogoEpson from '../assets/images/logo-epson.png';
import { Footer } from "../components/common/Footer";

const products = [
  { price: 22000, title: 'Mouse Genius DX-120 USB', img: Mouse },
  { price: 22000, title: 'Mouse Genius DX-120 USB', img: Mouse },
  { price: 22000, title: 'Mouse Genius DX-120 USB', img: Mouse },
  { price: 22000, title: 'Mouse Genius DX-120 USB', img: Mouse },
];

const tips = [
  { url: Tip, text: 'Como recargar impresoras Epson L4150.' },
  { url: Tip, text: 'Como recargar impresoras Epson L4150.' },
  { url: Tip, text: 'Como recargar impresoras Epson L4150.' },
]

const brands = [
  { id: 1, url: Adata },
  { id: 2, url: Genius },
  { id: 3, url: Logitech },
  { id: 4, url: Kingston },
  { id: 5, url: LogoEpson },
]

export const Home = () => {
  return (
    <>
      <div className="container">
        <Slideshow 
          speed={'1000'} 
          controls={true}
          message={false}
        />

        <main className='home-main'>
          <h2 className='home-title'>Productos Destacados</h2>
          <section className='home-products'>
            {products.map((card, i) => (
              <Card
                key={i}
                url={card.img}
                title={card.title}
                price={card.price}
              />
            ))}
          </section>
          <section className="home-products_news">
            <figure className="home-product_left">
              <img 
                src={Epson} 
                alt="Impresora epson L3110"                 
              />
            </figure>
            <div className="home-products_rigth">
              <div className="home-product"></div>
              <div className="home-product"></div>
            </div>
          </section>
          <h2 className='home-title'>Tips y temas de interés</h2>
          <section className="home-tips">
            {tips.map((tip, i) => (
              <CardTip
                key={i}
                url={tip.url}
                text={tip.text}
              />
            ))}
          </section>
          <h2 className='home-title'>Marcas</h2>
          <section className="home-brands">
            {brands.map((brand) => (
              <figure key={brand.id} className="home-brand">
                <img 
                  src={brand.url}
                  alt="logo adata"
                  className="home-brand_img"
                />
              </figure>
            ))}
          </section>
        </main>        
      </div>
    </>
  )
}