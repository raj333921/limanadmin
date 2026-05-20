import { List, Datagrid, TextField, EditButton, DeleteButton, DateField } from "react-admin";
import { useTranslation } from 'react-i18next';

const TokenList = () => {
  const { t } = useTranslation();

  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" label={t('tokens.id')} />
        <TextField source="email" label={t('tokens.email_id')} />
        <TextField source="code" label={t('tokens.test_code')} />
        <TextField source="is_used" label={t('tokens.used')} />
        <DateField source="created_at" label={t('tokens.created_at')} showTime />
        <EditButton label={t('actions.edit')} />
        <DeleteButton label={t('actions.delete')} />
      </Datagrid>
    </List>
  );
};

export default TokenList;