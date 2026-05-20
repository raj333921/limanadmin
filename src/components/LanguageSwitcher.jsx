import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    // Update when language changes
    const handleLanguageChanged = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <Box sx={{ display: 'flex', gap: 0.5 }}>
      {['en', 'fr', 'nl'].map((lang) => (
        <Button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          variant={currentLang === lang ? 'contained' : 'outlined'}
          size="small"
          sx={{
            minWidth: '40px',
            padding: '6px 10px',
            fontSize: '0.75rem',
            fontWeight: currentLang === lang ? '600' : '500'
          }}
        >
          {lang.toUpperCase()}
        </Button>
      ))}
    </Box>
  );
};

export default LanguageSwitcher;
