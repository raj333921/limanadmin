import { Login, LoginForm } from 'react-admin';
import { TextInput } from 'react-admin';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import LanguageSwitcher from '../components/LanguageSwitcher';

const CustomLoginForm = (props) => {
  const { t } = useTranslation();
  
  return (
    <LoginForm {...props}>
      <TextInput source="email" label={t('login.email')} />
      <TextInput source="password" label={t('login.password')} type="password" />
    </LoginForm>
  );
};

const CustomLoginPage = (props) => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 1 }}>
        <LanguageSwitcher />
      </Box>
      <Login {...props} loginForm={<CustomLoginForm />} />
    </Box>
  );
};

export default CustomLoginPage;
