import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';

import { useAlert } from '../hooks';

import { Title, Input, TextArea, Button } from "../components";

const initialValues = {
  nameCon: "",
  emailCon: "",
  phoneCon: "",
  message: "",
}

export const Contact = () => {
  const { toast } = useAlert();
  const [loading, setLoading] = useState(false);

  const formikContact = useFormik({
    initialValues,
    validationSchema: Yup.object({
      nameCon: Yup.string().required('Requerido'),
      emailCon: Yup.string()
        .email('Dirección de correo electrónico no válida').required('Requerido'),
        phoneCon: Yup.string()
        .required('Requerido')
        .matches(/^[0-9]+$/, "Deben ser solo números")
        .min(10, 'Debe tener 10 caracteres')
        .max(10, 'Debe tener 10 caracteres'),
        message: Yup.string()
    }),
    onSubmit: async (values) => {
      console.log(values);
    }
  });

  return (
    <div className="container">
      <div className="contact__main">
        <Title
          title='contacto'
          classname="contact__title"
        />

        <div className="contact__general">
          <section className="contact__location">
            <article className="contact__detail">
              <h5 className="contact__detail--title">Detalles de contacto</h5>

              <p>Puedes contactarte con nosotros dentro del horario de atención.</p>
              <p>Estaremos dispuestos para asesorarte y brindarte un buen servicio a medida de tus necesidades.</p>
              <p>Socorro - Santander</p>
            </article>

            <article className="contact__hours">
              <h5 className="contact__hours--title">Horario</h5>

              <div className="contact__hours--group">
                <p>Lunes a Viernes</p>
                <p>8:00 a.m a 12:00 p.m</p>
                <p>2:00 p.m a 6:00 p.m</p>
              </div>

              <div className="contact__hours--group">
                <p>Sabados</p>
                <p>8:00 a.m a 12:00 p.m</p>
                <p>2:00 p.m a 5:00 p.m</p>          
              </div>
            </article>
          </section>

          <section className="contact__form">
            <h5 className="contact__form--title">Formulario de contacto</h5>

            <p className="contact__form--text">
              Si tienes alguna consulta o necesitas información especifica y detallada,
              también puedes completar el siguiente formularia y te responderemos en menos de 24 hr.
            </p>

            <form 
              onSubmit={formikContact.handleSubmit}
              className="contact__form--ctn"
            >
              <Input
                id="nameCon"
                name="nameCon"
                type="text"
                label="Nombre completo"
                required={true}
                value={formikContact.values.nameCon}
                onChange={formikContact.handleChange}
                error={formikContact.errors.nameCon}
              />
              <Input
                id="emailCon"
                name="emailCon"
                type="email"
                label="Email"
                required={true}
                value={formikContact.values.emailCon}
                onChange={formikContact.handleChange}
                error={formikContact.errors.emailCon}
              />
              <Input
                id="phoneCon"
                name="phoneCon"
                type="number"
                label="Teléfono"
                required={true}
                value={formikContact.values.phoneCon}
                onChange={formikContact.handleChange}
                error={formikContact.errors.phoneCon}
              />

              <TextArea
                id="message"
                name="message"
                label="Mensaje"
                required={true}
                value={formikContact.values.message}
                onChange={formikContact.handleChange}
                error={formikContact.errors.message}
              />

              <Button
                type="submit"
                text="Enviar"
                loading={loading}
              />
            </form>
          </section>
        </div>

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
    </div>
  )
}