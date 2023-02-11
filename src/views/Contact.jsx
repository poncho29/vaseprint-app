import { Title, Input, TextArea } from "../components";

export const Contact = () => {
  return (
    <div className="contact__main">
      <Title
        title='contacto'
        classname="contact__title"
      />

      <section className="contact__location">
        <article className="contact__location--detail">
          <h5>Detalles de contacto</h5>

          <p>Puedes contactarte con nosotros dentro del horario de atención.</p>
          <p>Estaremos dispuestos para asesorarte y brindarte un buen servicio a medida de tus necesidades.</p>
          <p>Socorro - Santander</p>
        </article>

        <article className="contact__location--detail">
          <h5>Horario</h5>

          <p>Lunes a Viernes</p>
          <p>8:00 a.m a 12:00 p.m</p>
          <p>2:00 p.m a 6:00 p.m</p>

          <p>Sabados</p>
          <p>8:00 a.m a 12:00 p.m</p>
          <p>2:00 p.m a 5:00 p.m</p>
        </article>
      </section>

      <section className="contact__form">
        <h5 className="contact__form--title">Formulario de contacto</h5>

        <p className="contact__form--text">
          Si tienes alguna consulta o necesitas información especifica y detallada,
          también puedes completar el siguiente formularia y te responderemos en menos de 24 hr.
        </p>

        <form className="contact__form--ctn">
          <Input
            id="name"
            name="name"
            type="text"
            label="Nombre completo"
            required={true}
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // error={formik.errors.email}
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="Usuario"
            required={true}
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // error={formik.errors.email}
          />
          <Input
            id="number"
            name="number"
            type="number"
            label="Telfono"
            required={true}
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // error={formik.errors.email}
          />

          <TextArea
            id="message"
            name="message"
            label="Mensaje"
            required={true}
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // error={formik.errors.email}
          />
        </form>
      </section>

      <section className="contact__map">
        <iframe
          width="600"
          height="450"
          loading="lazy"
          style={{ border: 0}}
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4254947607683!2d-73.26384408516392!3d6.467660125604168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a7082d5c29%3A0x45b01a4bc8e02ed!2sCra.%2014%20%2311-36%2C%20Socorro%2C%20Santander!5e0!3m2!1ses!2sco!4v1676132867666!5m2!1ses!2sco"
        >
        </iframe>
      </section>
    </div>
  )
}