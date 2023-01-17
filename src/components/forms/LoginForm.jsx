import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';

import Input from './Input';
import Button from '../common/Button';
import { login } from '../../services/auth';
import { AuthContext } from '../../context/authContext/AuthContext';

const initialValues = {
  email: "",
  password: ""
}

const LoginForm = ({ navigateModal }) => {
  const [loading, setLoading] = useState(false);
  const { login: loginAuth } = useContext(AuthContext);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Dirección de correo electrónico no válida').required('Requerido'),
      password: Yup.string()
        .min(8, 'Debe tener mínimo 8 caracteres').required('Requerido'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      // console.log(values);

      loginAuth(values)
      // const resp = await login(values);
      // console.log(resp);
      setLoading(false);
    }
  });
  
  return (
    <form onSubmit={formik.handleSubmit} className="form__login">
      <h3 className="login__title">INICIA SESION</h3>
      <p className="login__subtitle">Bienvenido (a) a VasePrint</p>

      <Input
        id="email"
        name="email"
        type="email"
        label="Usuario"
        required={true}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />

      <Input
        id="password"
        name="password"
        type="password"
        label="Password"
        sizeLogo={14}
        showLogo={true}
        required={true}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <div className="footer__login">
        <p className="link__forgot">
          <span onClick={() => navigateModal('forgot')}>Olvide mi contraseña</span>
        </p>

        <Button
          type="submit"
          text="Ingresar"
          loading={loading}
        />

        <span>o</span>

        <p className="link__register">
          ¿No tienes cuenta?{" "}
          <span onClick={() => navigateModal('register')}>Regístrate</span>
        </p>
      </div>
    </form>
  )
}

export default LoginForm;
