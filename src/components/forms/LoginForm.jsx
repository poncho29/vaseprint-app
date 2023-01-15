import * as Yup from 'yup';
import { useFormik } from 'formik';

import Input from './Input';
import Button from '../common/Button';

const initialValues = {
  email: "",
  password: ""
}

const LoginForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Dirección de correo electrónico no válida').required('Requerido'),
      password: Yup.string()
        .min(8, 'Debe tener mínimo 8 caracteres').required('Requerido'),
    }),
    onSubmit: values => {
      console.log(values);
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
          <a href="">Olvide mi contraseña</a> 
        </p>

        <Button
          type="submit"
          text="Ingresar"
        />

        <span>o</span>

        <p className="link__register">
          ¿No tienes cuenta? <a href="">Regístrate</a>
        </p>
      </div>
    </form>
  )
}

export default LoginForm;
