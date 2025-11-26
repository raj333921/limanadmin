import {
    Create,
    SimpleForm,
    TextInput,
    SelectInput,
    FileInput,
    FileField,
    Toolbar,
    SaveButton,
    useRedirect,
    useNotify,
    required
} from "react-admin";
import { Button } from "@mui/material";

const levels = [
    { id: "hard", name: "Hard" },
    { id: "easy", name: "Easy" }
];

// Custom Toolbar with Clear and Cancel buttons
const QuestionToolbar = ({ ...props }) => {
    const redirect = useRedirect();

    // Cancel button handler
    const handleCancel = () => {
        redirect("/questions"); // go back to the question list
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

const QuestionCreate = () => (
    <Create>
        <SimpleForm toolbar={<QuestionToolbar />}>
            {/* Question in multiple languages */}
            <div style={{ display: "flex", gap: "1rem" }}>
                <TextInput source="question.en" label="Question (EN)" validate={required()} />
                <TextInput source="question.fr" label="Question (FR)" validate={required()} />
                <TextInput source="question.nl" label="Question (NL)" validate={required()} />
            </div>

            {/* Options in columns */}
            {["A", "B", "C", "D"].map(option => (
                <div key={option} style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem" }}>
                    <TextInput
                        source={`option${option}.en`}
                        label={`Option ${option} (EN)`}
                        validate={["A", "B"].includes(option) ? required() : undefined}
                    />
                    <TextInput
                        source={`option${option}.fr`}
                        label={`Option ${option} (FR)`}
                        validate={["A", "B"].includes(option) ? required() : undefined}
                    />
                    <TextInput
                        source={`option${option}.nl`}
                        label={`Option ${option} (NL)`}
                        validate={["A", "B"].includes(option) ? required() : undefined}
                    />
                </div>
            ))}

<div style={{ display: "flex", gap: "1rem" }}>
                <TextInput source="explanation.en" label="Explanation (EN)" validate={required()} />
                <TextInput source="explanation.fr" label="Explanation (FR)" validate={required()} />
                <TextInput source="explanation.nl" label="Explanation (NL)" validate={required()} />
            </div>

            {/* Correct answer */}
            <SelectInput
                source="answer"
                label="Correct Answer"
                choices={[
                    { id: "A", name: "A" },
                    { id: "B", name: "B" },
                    { id: "C", name: "C" },
                    { id: "D", name: "D" },
                ]}
                validate={required()}
            />

            {/* Level */}
            <SelectInput source="level" label="Level" choices={levels} validate={required()} />
            <FileInput
                            source="image"
                            label="Question Image"
                            accept="image/*"
                            validate={required()}
                        >
                            <FileField source="src" title="title" />
                        </FileInput>
        </SimpleForm>
    </Create>
);

export default QuestionCreate;
