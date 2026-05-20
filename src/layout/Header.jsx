import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useGetIdentity } from 'react-admin';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Header = (props) => {
  const { identity } = useGetIdentity();
  const { t } = useTranslation();

  return (
    <AppBar {...props} position="static" sx={{ backgroundColor: '#fafafa', color: 'rgba(0, 0, 0, 0.87)', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {t('header.title')}
        </Typography>
        <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 2, alignItems: 'center' }}>
          <LanguageSwitcher />
          {identity && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2">
                {t('header.welcome')}, <strong>{identity.admin?.displayName || 'Admin'}</strong>
              </Typography>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
