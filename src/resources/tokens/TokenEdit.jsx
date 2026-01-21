import {
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    Toolbar,
    SaveButton,
    useRedirect,
    Button,
    required,
    useRecordContext
} from "react-admin";

const levels = [
    { id: "hard", name: "Hard" },
    { id: "easy", name: "Easy" }
];

const TokenToolbar = ({ ...props }) => {
    const redirect = useRedirect();

    const handleCancel = () => {
        redirect("/tokens");
    };

    return (
        <Toolbar {...props}>
            <SaveButton label="Update" />
            <Button type="button" onClick={() => props.reset()} style={{ marginLeft: "1rem" }} variant="outlined">
                Clear
            </Button>
            <Button type="button" onClick={handleCancel} style={{ marginLeft: "1rem" }} variant="outlined" color="secondary">
                Cancel
            </Button>
        </Toolbar>
    );
};

const TokenEditForm = () => {
    const record = useRecordContext();
    if (!record) return <div>Loading...</div>;
    return (
        <SimpleForm toolbar={<TokenToolbar />}>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <TextInput source="email" label="Email Id" validate={required()} />
                <TextInput source="code" label="Token" validate={required()} />
            </div>

        </SimpleForm>
    );
};

const TokenEdit = (props) => <Edit {...props}><TokenEditForm /></Edit>;

export default TokenEdit;
