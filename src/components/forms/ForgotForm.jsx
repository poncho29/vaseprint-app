import * as Yup from 'yup';
import { useFormik } from 'formik';

import { Input } from './';
import { Button } from '../common';

const initialValues = {
  currentPass: "",
  newPass: "",
  newPassConfirm: ""
}

const ForgotForm = ({ navigateModal }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      currentPass: Yup.string().required('Requerido'),
      newPass: Yup.string()
        .min(8, 'Debe tener mínimo 8 caracteres').required('Requerido'),
      newPassConfirm: Yup.string()
        .min(8, 'Debe tener mínimo 8 caracteres').required('Requerido'),
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="forgot__form">
      <h3 className="forgot__title">RECUPERAR CONTRASEÑA</h3>
      <p className="forgot__subtitle">Hemos enviado una nueva contraseña a tu E-mail.</p>

      <Input
        id="currentPass"
        name="currentPass"
        type="password"
        label="Contraseña actual"
        sizeLogo={14}
        showLogo={true}
        required={true}
        value={formik.values.currentPass}
        onChange={formik.handleChange}
        error={formik.errors.currentPass}
      />
      <Input
        id="newPass"
        name="newPass"
        type="password"
        label="Contraseña"
        sizeLogo={14}
        showLogo={true}
        required={true}
        value={formik.values.newPass}
        onChange={formik.handleChange}
        error={formik.errors.newPass}
      />
      <Input
        id="newPassConfirm"
        name="newPassConfirm"
        type="password"
        label="Confirmas contraseña"
        sizeLogo={14}
        showLogo={true}
        required={true}
        value={formik.values.newPassConfirm}
        onChange={formik.handleChange}
        error={formik.errors.newPassConfirm}
      />
      
      <div className="forgot__register">
        <Button
          type="submit"
          text="Enviar"
        />
        <p className="link__login">
          ¿La recordaste?{" "}
          <span onClick={() => navigateModal('remember')}>Inicia sesión</span>
        </p>
      </div>
    </form>
  )
}

export default ForgotForm;
