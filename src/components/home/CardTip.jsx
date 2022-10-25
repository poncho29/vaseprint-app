
export const CardTip = ({ url, text }) => {
  return (
    <div className="card-tip">
      <figure className="card-tip-ctnimg">
        <img
          src={url}
          className="card-tip_img"
          alt="Como recargar impresora L3110"
        />
        <div className="card-tip-bg"></div>
      </figure>
      <div className="card-tip_ctn">
        <p className="card-tip_text">{ text }</p>
        <button className="card-tip_btn">Ver</button>
      </div>
    </div>
  );
};
