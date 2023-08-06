import { initialState } from './iniialState';
import PropTypes from 'prop-types';
import { fields } from './fields';
import Button from '../../shared/Button';
import { MdEmail, MdHttps } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '../../shared/TextFild';
import { LoginFormS } from './loginForm.styled';

const LoginForm = ({ onSubmit }) => {
  const validate = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .max(12, 'Must be 12 characters or less')
      .required('Required'),
  });
  return (
    <Formik
      initialValues={initialState}
      validationSchema={validate}
      onSubmit={values => onSubmit(values)}
    >
      {formik => (
        <LoginFormS>
          <Form className="loginForm">
            <div className="boxLogin">
              <TextField {...fields.email} />
              <MdEmail className="iconEmail" />
            </div>
            <div className="boxLogin">
              <TextField {...fields.password} />
              <MdHttps className="iconPass" />
            </div>
            <Button type="submit" variant="login">
              Log in
            </Button>
            <Link to="/register" className="witeButton">
              Register
            </Link>
          </Form>
        </LoginFormS>
      )}
    </Formik>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
