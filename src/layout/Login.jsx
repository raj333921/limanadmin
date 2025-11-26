
import { Login, LoginForm } from 'react-admin';
import { TextInput } from 'react-admin';

const CustomLoginForm = props => (
    <LoginForm {...props}>
        <TextInput source="email" label="Email" />
        <TextInput source="password" type="password" />
    </LoginForm>
);

const CustomLoginPage = props => <Login {...props} loginForm={<CustomLoginForm />} />;

export default CustomLoginPage;
