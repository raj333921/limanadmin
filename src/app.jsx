import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import TokenList from "./resources/tokens/TokenList";
import TokenCreate from "./resources/tokens/TokenCreate";
import TokenEdit from "./resources/tokens/TokenEdit";
import QuestionList from "./resources/questions/QuestionList";
import QuestionCreate from "./resources/questions/QuestionCreate";
import QuestionEdit from "./resources/questions/QuestionEdit";
import SettingsList from "./resources/settings/SettingsList";
import CustomLoginPage from "./layout/Login";
import CustomLayout from "./layout/CustomLayout";
import { Settings } from '@mui/icons-material';

const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} loginPage={CustomLoginPage} layout={CustomLayout}>
    <Resource
                        name="tokens"
                        list={TokenList}
                        create={TokenCreate}
                        edit={TokenEdit}
                    />
        <Resource
            name="questions"
            list={QuestionList}
            create={QuestionCreate}
            edit={QuestionEdit}
        />
        <Resource
            name="settings"
            list={SettingsList}
            icon={Settings}
        />
    </Admin>
);

export default App;
