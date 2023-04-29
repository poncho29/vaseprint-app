import { capitalize, formatterPeso } from "./../../utils";

export const Card = ({ title, price, url }) => {
  return (
    <div className="card">
      <figure className="card-img">
        <img src={url} alt="Mouse genius dx 120 USB" />
      </figure>
      <div className="card-description">
        <p className="card-price">{formatterPeso.format(price)}</p>
        <p className="card-title">{capitalize(title)}</p>
        <div className='card-content-btn'>
          <button className="card-btn" onClick={() => alert('hola')}>Ver producto</button>
        </div>
      </div>
    </div>
  )
}
