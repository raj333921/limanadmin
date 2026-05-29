import React from 'react';
import { Box, Grid, Paper, Typography, Avatar, Divider, Chip, useTheme } from '@mui/material';
import { useGetIdentity } from 'react-admin';
import { useTranslation } from 'react-i18next';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SettingsCard = ({ icon: Icon, title, children, theme }) => (
    <Paper 
        elevation={0}
        sx={{ 
            padding: 3,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.primary.main}05 100%)`,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                transform: 'translateY(-2px)',
            }
        }}
    >
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2.5 }}>
            <Box 
                sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 1.5,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    marginRight: 1.5,
                }}
            >
                <Icon sx={{ color: 'white', fontSize: 22 }} />
            </Box>
            <Typography 
                variant="h6" 
                sx={{ 
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    letterSpacing: 0.5
                }}
            >
                {title}
            </Typography>
        </Box>
        <Box sx={{ marginLeft: 6 }}>
            {children}
        </Box>
    </Paper>
);

const SettingField = ({ label, value, isHighlight }) => (
    <Box sx={{ marginBottom: 2, '&:last-child': { marginBottom: 0 } }}>
        <Typography 
            variant="caption" 
            sx={{ 
                display: 'block',
                textTransform: 'uppercase',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: 0.8,
                color: '#999',
                marginBottom: 0.5
            }}
        >
            {label}
        </Typography>
        <Typography 
            variant="body1" 
            sx={{ 
                fontWeight: isHighlight ? 700 : 500,
                color: isHighlight ? '#1976d2' : '#333',
                fontSize: '0.95rem',
                wordBreak: 'break-word'
            }}
        >
            {value || '—'}
        </Typography>
    </Box>
);

const SettingsList = (props) => {
    const { t } = useTranslation();
    const { identity, isLoading } = useGetIdentity();
    const theme = useTheme();

    if (isLoading || !identity) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="h6">{t('Loading...')}</Typography>
            </Box>
        );
    }

    const admin = identity.admin || {};

    return (
        <Box sx={{ padding: 4, background: '#f8f9fa', minHeight: '100vh' }}>
            {/* Header Section */}
            <Box sx={{ marginBottom: 5 }}>
                <Typography 
                    variant="h3" 
                    sx={{ 
                        fontWeight: 800,
                        marginBottom: 1,
                        color: '#1a1a1a',
                        letterSpacing: -0.5
                    }}
                >
                    {t('settings.header')}
                </Typography>

            </Box>

            {/* Main Content Grid */}
            <Grid container spacing={3} sx={{ marginTop: 1 }}>
                {/* Admin Information Card */}
                <Grid item xs={12} md={6} lg={4}>
                    <SettingsCard icon={PersonIcon} title={t('settings.adminInfo')} theme={theme}>
                        <SettingField label={t('settings.email')} value={admin.email} />
                        <SettingField label={t('settings.firstName')} value={admin.firstName} />
                        <SettingField label={t('settings.lastName')} value={admin.lastName} />
                        <SettingField label={t('settings.appName')} value={admin.displayName} isHighlight />
                    </SettingsCard>
                </Grid>

                {/* Driving School Information Card */}
                <Grid item xs={12} md={6} lg={4}>
                    <SettingsCard icon={BusinessIcon} title={t('settings.drivingSchoolInfo')} theme={theme}>
                        <SettingField label={t('settings.schoolNumber')} value={admin.drivingSchoolNumber} />
                        <SettingField label={t('settings.companyName')} value={admin.company} isHighlight />
                        <SettingField label={t('settings.vatNumber')} value={admin.vat} />
                    </SettingsCard>
                </Grid>

                {/* Address Information Card */}
                <Grid item xs={12} md={6} lg={4}>
                    <SettingsCard icon={LocationOnIcon} title={t('settings.addressInfo')} theme={theme}>
                        <SettingField label={t('settings.address1')} value={admin.address1} />
                        <SettingField label={t('settings.address2')} value={admin.address2} />
                        <SettingField label={t('settings.city')} value={admin.city} />
                        <SettingField label={t('settings.postalCode')} value={admin.pincode} />
                        <SettingField label={t('settings.country')} value={admin.country} />
                    </SettingsCard>
                </Grid>
            </Grid>

            {/* Summary Info Bar */}
            <Paper 
                elevation={0}
                sx={{ 
                    marginTop: 5,
                    padding: 3,
                    background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                    borderRadius: 2,
                    color: 'white'
                }}
            >
                <Grid container spacing={3} sx={{ textAlign: 'center' }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="caption" sx={{ opacity: 0.8, display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600, letterSpacing: 0.8, marginBottom: 0.5 }}>
                            {t('settings.companyName')}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {admin.company || '—'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="caption" sx={{ opacity: 0.8, display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600, letterSpacing: 0.8, marginBottom: 0.5 }}>
                            {t('settings.city')}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {admin.city || '—'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="caption" sx={{ opacity: 0.8, display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600, letterSpacing: 0.8, marginBottom: 0.5 }}>
                            {t('settings.country')}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {admin.country || '—'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="caption" sx={{ opacity: 0.8, display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600, letterSpacing: 0.8, marginBottom: 0.5 }}>
                            {t('settings.appName')}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {admin.displayName || '—'}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default SettingsList;
