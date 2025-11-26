import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";

import QuestionList from "./resources/questions/QuestionList";
import QuestionCreate from "./resources/questions/QuestionCreate";
import QuestionEdit from "./resources/questions/QuestionEdit";
import CustomLoginPage from "./layout/Login";

const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} loginPage={CustomLoginPage}>
        <Resource
            name="questions"
            list={QuestionList}
            create={QuestionCreate}
            edit={QuestionEdit}
        />
    </Admin>
);

export default App;
