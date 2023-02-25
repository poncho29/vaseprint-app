import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';

import { useAlert } from '../../hooks';
import { createUser } from '../../services/auth';

import { Input } from './';
import { Button } from '../common';

const initialValues = {
  name: "",
  emailReg: "",
  phone: "",
  pass: "",
  passConfirm: "",
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
        email: data.emailReg,
        password: pass,
        state: true,
        roleId: 2,
        img: data.img
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
    }
  });

  // const handleInputFile = async (e) => {
  //   e.preventDefault();
  //   const form = new FormData();
  //   const files = e.target.files;
    
  //   if (files && files.length > 1) {
  //     toast.error("Solo puede cargar 1 imagen");
  //     return;
  //   } 

  //   const img = files[0];
  //   form.append('file', img)
  //   const data = await uploadFile(form);

  //   if (data.err) {
  //     toast.error("Error al cargar la imagen");
  //     return
  //   }

  //   e.target.files = null;
  //   setImgProfile(data.url)
  //   formikReg.setFieldValue('img', data.url);
  // }

  // const handleResetImg = async () => {
  //   const imgId = getIdImg(imgProfile)

  //   console.log(imgId);
  //   const data = await deleteFile(imgId)
  //   console.log(data);

  //   if (data.err) {
  //     toast.error("Error al eliminar la imagen");
  //     return;
  //   }

  //   if (data.result === 'ok') {
  //     setImgProfile('')
  //     formikReg.setFieldValue('img', '')
  //   }        
  // }

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
        error={formikReg.errors.name}
        onChange={formikReg.handleChange}
      />

      <Input
        id="emailReg"
        name="emailReg"
        type="email"
        label="Correo Electronico *"
        required={true}
        value={formikReg.values.emailReg}
        error={formikReg.errors.emailReg}
        onChange={formikReg.handleChange}
      />

      <Input
        id="phone"
        name="phone"
        type="text"
        label="Celular *"
        required={true}
        value={formikReg.values.phone}
        error={formikReg.errors.phone}
        onChange={formikReg.handleChange}
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
        error={formikReg.errors.pass}
        onChange={formikReg.handleChange}
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
        error={formikReg.errors.passConfirm}
        onChange={formikReg.handleChange}
      />

      {/* <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        
        { imgProfile ?
          <div style={{ display: 'flex', gap: '1rem' }}>
            <img
              style={{ width: '60px', height: '90px',}}
              src={imgProfile}
              alt="img"
            />
            <button type='button' onClick={handleResetImg}>delete</button>
          </div>
          :
          <div>
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '90px',
              height: '90px',
              borderRadius: '11px',
              backgroundColor: '#ccc',
              fontSize: '12px'
            }}
            >
              Img Profile
            </div>
            <input
              id='file'
              name='img'
              type="file"
              onChange={handleInputFile}
            />
          </div>
        }
                
      </div> */}

      <div className="footer__register">
        <Button
          type="submit"
          text="Registrarme"
          loading={loading}
        />
        <p className="link__login">
          ¿Ya tienes cuenta?{" "}
          <span onClick={() => navigateModal('login')}>Inicia sesión</span>
        </p>
      </div>
    </form>
  )
}

export default RegisterForm