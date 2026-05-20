import { Login, LoginForm } from 'react-admin';
import { TextInput } from 'react-admin';
import { useTranslation } from 'react-i18next';

const CustomLoginForm = (props) => {
  const { t } = useTranslation();
  
  return (
    <LoginForm {...props}>
      <TextInput source="email" label={t('login.email')} />
      <TextInput source="password" label={t('login.password')} type="password" />
    </LoginForm>
  );
};

const CustomLoginPage = (props) => <Login {...props} loginForm={<CustomLoginForm />} />;

export default CustomLoginPage;