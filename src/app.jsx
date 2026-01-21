import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import TokenList from "./resources/tokens/TokenList";
import TokenCreate from "./resources/tokens/TokenCreate";
import TokenEdit from "./resources/tokens/TokenEdit";
import QuestionList from "./resources/questions/QuestionList";
import QuestionCreate from "./resources/questions/QuestionCreate";
import QuestionEdit from "./resources/questions/QuestionEdit";
import CustomLoginPage from "./layout/Login";

const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} loginPage={CustomLoginPage}>
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
    </Admin>
);

export default App;
