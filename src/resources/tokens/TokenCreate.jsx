import {
    Create,
    SimpleForm,
    TextInput,
    Toolbar,
    SaveButton,
    useRedirect,
    useNotify,
    required
} from "react-admin";
import { Button } from "@mui/material";

// Custom Toolbar with Clear and Cancel buttons
const TokenToolbar = ({ ...props }) => {
    const redirect = useRedirect();

    // Cancel button handler
    const handleCancel = () => {
        redirect("/tokens"); // go back to the question list
    };

    return (
        <Toolbar {...props}>
            <SaveButton />
            <Button
                type="button"
                onClick={() => props.reset()} // Clear the form
                style={{ marginLeft: "1rem" }}
                variant="outlined"
            >
                Clear
            </Button>
            <Button
                type="button"
                onClick={handleCancel}
                style={{ marginLeft: "1rem" }}
                variant="outlined"
                color="secondary"
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

const TokenCreate = () => (
    <Create>
        <SimpleForm toolbar={<TokenToolbar />}>
                <TextInput source="email" label="Email Id" validate={required()} />
                <TextInput source="code" label="Token" validate={required()} />
        </SimpleForm>
    </Create>
);

export default TokenCreate;
