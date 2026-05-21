import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useGetIdentity } from 'react-admin';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Header = (props) => {
  const { identity } = useGetIdentity();
  const { t } = useTranslation();

  // Get page title from props or location
  const getPageTitle = () => {
    // Try to get resource from props
    if (props.resource) {
      if (props.resource === 'settings') {
        return t('settings.title');
      } else if (props.resource === 'tokens') {
        return t('tokens.title');
      } else if (props.resource === 'questions') {
        return t('questions.title');
      }
    }
    
    // Fallback: check localStorage for current resource
    try {
      const currentResource = localStorage.getItem('ra-resource');
      if (currentResource === 'settings') {
        return t('settings.title');
      } else if (currentResource === 'tokens') {
        return t('tokens.title');
      } else if (currentResource === 'questions') {
        return t('questions.title');
      }
    } catch (e) {
      // localStorage not available
    }
    
    return '';
  };

  const pageTitle = getPageTitle();

  return (
    <AppBar 
      {...props} 
      position="static" 
      sx={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
        color: 'rgba(0, 0, 0, 0.87)', 
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        borderBottom: '1px solid #e0e0e0'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {t('header.title')}
          </Typography>
          
          {pageTitle && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ width: 30, height: 2, background: 'linear-gradient(90deg, #e0e0e0, transparent)', borderRadius: 1 }} />
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: '#1976d2',
                  letterSpacing: 0.3
                }}
              >
                {pageTitle}
              </Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 2, alignItems: 'center' }}>
          <LanguageSwitcher />
          {identity && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ color: '#666' }}>
                {t('header.welcome')}, <strong sx={{ color: '#1976d2' }}>{identity.admin?.displayName || 'Admin'}</strong>
              </Typography>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
