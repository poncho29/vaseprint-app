import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

import { uploadFile } from '../../../services/uploads';
import { createUser, getUser } from '../../../services/users';

import { useAlert } from '../../../hooks';

import { Input, InputFile, Button } from '../../../components';

const initialValues = {
  name: '',
  email: '',
  dni: '',
  phone: '',
  // role: '',
  newpass: '',
  img: ''
}

const FormUser = () => {
  const { toast } = useAlert();
  const {id = ''} = useParams();
  const navigate = useNavigate();

  // STATES
  const [file, setFile] = useState(null);
  const [urlFile, setUrlFile] = useState('');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(initialValues);
  const [loadingUser, setLoadingUser] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Requerido'),
      dni: Yup.string().optional(),
      email: Yup.string()
        .email('Dirección de correo electrónico no válida')
        .required('Requerido'),
      phone: Yup.string()
        .required('El teléfono es requerido')
        .matches(/^[0-9]+$/, "Deben ser solo números")
        .min(10, 'Debe tener 10 caracteres')
        .max(10, 'Debe tener 10 caracteres'),      
      newpass: Yup.string()
        .min(8, 'Debe tener mínimo 8 caracteres')
        .required('El teléfono es requerido'),
      img: Yup.string().optional()
    }),
    onSubmit: async (values) => {
      console.log(values);
      let urlImage = '';

      setLoadingUser(true);
      if (file) {
        const form = new FormData;
        form.append('file', file);
        urlImage = await uploadFile(form);        
      }

      const newUser = {
        name: values.name,
        email: values.email,
        dni: values.dni,
        phone: values.phone.toString(),
        roleId: 1,
        password: values.newpass,
        img: urlImage.url,
      }

      const data = await createUser(newUser);
      console.log(data)

      if (data.data.errors) {
        toast.error(data.errors[0].msg);
        setLoadingUser(false);
        return;
      }

      toast.success(data.msg);
      setLoadingUser(false);
      // navigate('/admin');
    }
  });

  // EFFECTS
  useEffect(() => {
    if (id) {
      getUserById(id);
    } else {
      setLoading(false);
    }
  }, []);

  // FUNCTIONS
  const getUserById = async (id) => {
    if (!id) return;

    const { data } = await getUser(id);

    if (data.errors) {
      toast.error(data.errors[0].msg);
      navigate('/admin');
      return;
    }

    setUser(data.user);
    formik.setValues({
      name: data.user.name || '',
      email: data.user.email || '',
      dni:  data.user.dni || '',
      phone:  data.user.phone || '',
      role:  data.user.roleId || '',
      newpass: '',
      img: data.user.img || '',
    });
    setUrlFile(data.user.img);
    setLoading(false);
  }

  // Set new image
  const uploadFileImg = (value) => {
    if (!value) {
      setFile(null);
      setUrlFile('');
      return;
    }

    const files = value.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      setUrlFile(URL.createObjectURL(files[0]));
    }
  }

  if (loading) {
    return (
      <div className='user__loading'>
        loading...
      </div>
    )
  }

  return (
    <div className='user'>
      <header className='headeruser'>
         <button
          className='headeruser__back'
          onClick={() => navigate('/admin')}  
        >
          <IoIosArrowBack size={16}/>
          Atrás
        </button>

        <h2 className='headeruser__title'>Crear Usuario</h2>       
      </header>

      <form className='formuser' onSubmit={formik.handleSubmit}>
        <Input 
          id="name"
          name="name"
          type="text"
          label="Nombre Completo *"
          className="margin"
          required={true}
          value={formik.values.name}
          error={formik.errors.name}
          onChange={formik.handleChange}
        />

        <Input
          id="dni"
          name="dni"
          type="text"
          label="Cédula"
          className="margin"
          value={formik.values.dni}
          error={formik.errors.dni}
          onChange={formik.handleChange}
        />

        <Input
          id="email"
          name="email"
          type="email"
          label="Correo Electronico *"
          className="margin"
          required={true}
          value={formik.values.email}
          error={formik.errors.email}
          onChange={formik.handleChange}
        />

        <Input
          id="phone"
          name="phone"
          type="number"
          label="Número teléfonico *"
          className="margin"
          required={true}
          value={formik.values.phone}
          error={formik.errors.phone}
          onChange={formik.handleChange}
        />

        <Input
          id="newpass"
          name="newpass"
          type="password"
          label="Contraseña *"
          className="margin"
          sizeLogo={16}
          showLogo={true}
          value={formik.values.newpass}
          error={formik.errors.newpass}
          onChange={formik.handleChange}
        />
        
        <div className='img__group'>
          <div className='contet__img'>
            { urlFile ?
                <img src={urlFile} alt="profile img" />
                :
                <p className='default__text'>Foto de perfil</p>
            }
          </div>
          <InputFile
            id="file"
            name="file"
            label="Imagen de perfil"
            urlImg={urlFile}
            onChange={(e) => uploadFileImg(e)}
          />
        </div>

        <div className='btn__gruop'>
          <Button
            type="submit"
            text="Crear usuario"
            loading={loadingUser}
          />
          <Button
            type="button"
            text="Cancelar"
            onClick={() => {
              formik.handleReset(initialValues);
              navigate('/admin');
            }}
          />
        </div>
      </form>
    </div>
  )
}

export default FormUser;
