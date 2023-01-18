import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';

import { useAlert } from '../../hooks';
import { createUser } from '../../services/auth';

import Input from "./Input";
import Button from '../common/Button';

const initialValues = {
  name: "",
  emailReg: "",
  phone: "",
  pass: "",
  passConfirm: ""
}

const RegisterForm = ({ navigateModal }) => {
  const { toast } = useAlert();
  const [loading, setLoading] = useState(false);

  const formikReg = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Requerido'),
      phone: Yup.string()
        .required('Requerido')
        .matches(/^[0-9]+$/, "Deben ser solo números")
        .min(10, 'Debe tener 10 caracteres')
        .max(10, 'Debe tener 10 caracteres'),
      emailReg: Yup.string()
        .email('Dirección de correo electrónico no válida').required('Requerido'),
      pass: Yup.string()
        .min(8, 'Debe tener mínimo 8 caracteres').required('Requerido'),
      passConfirm: Yup.string()
        .min(8, 'Debe tener mínimo 8 caracteres').required('Requerido'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      const { pass, passConfirm, ...data } = values;

      if (pass !== passConfirm) {
        toast.error("Las contraseñas no coinciden");
        setLoading(false);
        return;
      }

      const newUser = {
        name: data.name,
        phone: data.phone.toString(),
        user: {
          email: data.emailReg,
          password: pass,
          state: true,
          roleId: 2
        }
      }

      const resp = await createUser(newUser);
      setLoading(false);

      if (resp.errors) {
        resp.errors.forEach((err) => {
          toast.error(err.msg);
        });
        return;
      }

      toast.success(resp.msg);
      formikReg.handleReset();
      navigateModal('login');
      // setTimeout(() => {
      // }, 1000);
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
        type="text"
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
          loading={loading}
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