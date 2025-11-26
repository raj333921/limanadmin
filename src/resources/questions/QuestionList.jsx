import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton } from "react-admin";

const QuestionList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="question" label="Question" />
      <TextField source="level" label="Level" />

      {/* Show options in columns */}
      <TextField source="options.0.en" label="Option A (EN)" />
      <TextField source="options.1.en" label="Option B (EN)" />
      <TextField source="options.2.en" label="Option C (EN)" />
      <TextField source="options.3.en" label="Option D (EN)" />

      {/* Correct answer */}
      <TextField
        label="Correct Answer"
        source="correct_option"
        render={record => ["A", "B", "C", "D"][record.correct_option]}
      />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default QuestionList;
