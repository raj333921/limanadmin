import React from 'react';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {['en', 'fr', 'nl'].map((lang) => (
        <Button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          variant={i18n.language === lang ? 'contained' : 'outlined'}
          size="small"
        >
          {lang.toUpperCase()}
        </Button>
      ))}
    </Box>
  );
};

export default LanguageSwitcher;