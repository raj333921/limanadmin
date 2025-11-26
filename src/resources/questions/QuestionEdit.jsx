import {
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    FileInput,
    ImageField,
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

const QuestionToolbar = ({ ...props }) => {
    const redirect = useRedirect();

    const handleCancel = () => {
        redirect("/questions");
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

const QuestionEditForm = () => {
    const record = useRecordContext();
    if (!record) return <div>Loading...</div>;

    const question = record.question?.[0] || { en: "", fr: "", nl: "" };
    const explanation = record.explanation?.[0] || { en: "", fr: "", nl: "" };
    const options = record.options || [{}, {}, {}, {}];

    return (
        <SimpleForm toolbar={<QuestionToolbar />}>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <TextInput source="question.en" label="Question (EN)" defaultValue={question.en} validate={required()} />
                <TextInput source="question.fr" label="Question (FR)" defaultValue={question.fr} validate={required()} />
                <TextInput source="question.nl" label="Question (NL)" defaultValue={question.nl} validate={required()} />
            </div>

            {["A", "B", "C", "D"].map((opt, idx) => (
                <div key={opt} style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem" }}>
                    <TextInput
                        source={`option${opt}.en`}
                        label={`Option ${opt} (EN)`}
                        defaultValue={options[idx]?.en || ""}
                        validate={["A", "B"].includes(opt) ? required() : undefined}
                    />
                    <TextInput
                        source={`option${opt}.fr`}
                        label={`Option ${opt} (FR)`}
                        defaultValue={options[idx]?.fr || ""}
                        validate={["A", "B"].includes(opt) ? required() : undefined}
                    />
                    <TextInput
                        source={`option${opt}.nl`}
                        label={`Option ${opt} (NL)`}
                        defaultValue={options[idx]?.nl || ""}
                        validate={["A", "B"].includes(opt) ? required() : undefined}
                    />
                </div>
            ))}

<div style={{ display: "flex", gap: "1rem" }}>
                <TextInput source="explanation.en" label="Explanation (EN)"  defaultValue={explanation.en} validate={required()} />
                <TextInput source="explanation.fr" label="Explanation (FR)" defaultValue={explanation.fr} validate={required()} />
                <TextInput source="explanation.nl" label="Explanation (NL)" defaultValue={explanation.nl} validate={required()} />
            </div>
            <SelectInput
                source="answer"
                label="Correct Answer"
                choices={[
                    { id: "A", name: "A" },
                    { id: "B", name: "B" },
                    { id: "C", name: "C" },
                    { id: "D", name: "D" },
                ]}
                defaultValue={["A", "B", "C", "D"][record.correct_option] || "A"}
                validate={required()}
            />

            <SelectInput source="type" label="Level" choices={levels} defaultValue={record.level} validate={required()} />

            {record.image_path && <ImageField source="image_base64" label="Current Image" />}

            <FileInput source="image" label="Upload New Image" accept="image/*">
                <ImageField source="src" title="title" />
            </FileInput>
        </SimpleForm>
    );
};

const QuestionEdit = (props) => <Edit {...props}><QuestionEditForm /></Edit>;

export default QuestionEdit;
