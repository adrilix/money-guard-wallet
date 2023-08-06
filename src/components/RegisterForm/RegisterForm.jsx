import { initialState } from './initialState';
import PropTypes from 'prop-types';

import { fields } from './fields';
import TextField from '../../shared/TextFild';
import Button from '../../shared/Button';
import { MdEmail, MdHttps } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import PasswordStrengthBar from 'react-password-strength-bar';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { RegisterFormS } from './registerForm.styled';
import PasswordStrengthBar from 'react-password-strength-bar';

const RegisterForm = ({ onSubmit }) => {
  const validate = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .max(12, 'Must be 12 characters or less')
      .required('Required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password mismatch')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validate}
      onSubmit={values => onSubmit(values)}
    >
      {formik => (
        <RegisterFormS>
          <Form className="loginRegForm">
            <div className="boxLogin">
              <TextField {...fields.email} />
              <MdEmail className="iconEmail" />
            </div>
            <div className="boxLogin">
              <TextField {...fields.password} />
              <MdHttps className="iconPass" />
            </div>
            <div className="boxLogin">
              <TextField
                customClassErrorMSg="errorMSg"
                {...fields.passwordConfirm}
              />
              <PasswordStrengthBar
                password={formik.values.password}
                className="passBar"
              />

              <MdHttps className="iconPassCorrect" />
            </div>
            <Button variant="registration" type="submit">
              Register
            </Button>
            <Link to="/" className="witeButton">
              Log In
            </Link>
          </Form>
        </RegisterFormS>
      )}
    </Formik>
  );
};

export default RegisterForm;
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
