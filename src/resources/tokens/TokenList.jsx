import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton,DateField } from "react-admin";

const TokenList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="email" label="Email Id" />
      <TextField source="code" label="Test Code" />
      <TextField source="is_used" label="Used" />
      <DateField
        source="created_at"
        label="Created at"
        showTime
      />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default TokenList;
