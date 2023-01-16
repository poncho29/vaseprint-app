import * as Yup from 'yup';
import { useFormik } from 'formik';

import Input from "./Input";
import Button from '../common/Button';

const initialValues = {
  name: "",
  // lastname: "",
  emailReg: "",
  phone: "",
  pass: "",
  passConfirm: ""
}

const RegisterForm = ({ navigateModal }) => {
  const formikReg = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Requerido'),
      // lastname: Yup.string().required('Requerido'),
      phone: Yup.number().required('Requerido'),
      emailReg: Yup.string()
        .email('Dirección de correo electrónico no válida').required('Requerido'),
      pass: Yup.string()
        .min(8, 'Debe tener mínimo 8 caracteres').required('Requerido'),
      passConfirm: Yup.string()
        .min(8, 'Debe tener mínimo 8 caracteres').required('Requerido'),
    }),
    onSubmit: values => {
      const { pass, passConfirm, ...data } = values;

      if (pass !== passConfirm) {
        alert("Las contraseñas no coinciden");
        return;
      }

      const newUser = {
        name: data.name,
        phone: data.phone.toString(),
        user: {
          email: data.emailReg,
          password: pass,
          state: true,
          role: 2
        }
      }

      console.log(newUser);
    }
  });

  return (
    <form onSubmit={formikReg.handleSubmit} className="form__register">
      <div className="register__header">
        <h3 className="register__title">REGISTRO</h3>
        <span className="register__message">Campo obligatorio *</span>
      </div>
      <p className="register__subtitle">Completa el formulario con datos personales</p>

      <Input
        id="name"
        name="name"
        type="text"
        label="Nombres *"
        required={true}
        value={formikReg.values.name}
        onChange={formikReg.handleChange}
        error={formikReg.errors.name}
      />

      {/* <Input
        id="lastname"
        name="lastname"
        type="text"
        label="Apellidos *"
        required={true}
        value={formikReg.values.lastname}
        onChange={formikReg.handleChange}
        error={formikReg.errors.lastname}
      /> */}

      <Input
        id="emailReg"
        name="emailReg"
        type="email"
        label="Correo Electronico *"
        required={true}
        value={formikReg.values.emailReg}
        onChange={formikReg.handleChange}
        error={formikReg.errors.emailReg}
      />

      <Input
        id="phone"
        name="phone"
        type="number"
        label="Celular *"
        required={true}
        value={formikReg.values.phone}
        onChange={formikReg.handleChange}
        error={formikReg.errors.phone}
      />

      <Input
        id="pass"
        name="pass"
        type="password"
        label="Contraseña *"
        sizeLogo={14}
        showLogo={true}
        required={true}
        value={formikReg.values.pass}
        onChange={formikReg.handleChange}
        error={formikReg.errors.pass}
      />

      <Input
        id="passConfirm"
        name="passConfirm"
        type="password"
        label="Confirmar Contraseña *"
        sizeLogo={14}
        showLogo={true}
        required={true}
        value={formikReg.values.passConfirm}
        onChange={formikReg.handleChange}
        error={formikReg.errors.passConfirm}
      />

      <div className="footer__register">
        <Button
          type="submit"
          text="Registrarme"
        />
        <p className="link__login">
          ¿No tienes cuenta?{" "}
          <span onClick={() => navigateModal('login')}>Inicia sesión</span>
        </p>
      </div>
    </form>
  )
}

export default RegisterForm