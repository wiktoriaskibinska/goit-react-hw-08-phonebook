import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from './Register.module.css';

const Register = () => {
  return (
    <div className={css.registerpage}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};
export default Register;
