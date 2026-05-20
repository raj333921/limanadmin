import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import { Card, CardContent, Typography, Box, Grid, Paper } from '@mui/material';
import { useGetIdentity } from 'react-admin';
import { useTranslation } from 'react-i18next';

const SettingsList = (props) => {
    const { t } = useTranslation();
    const { identity, isLoading } = useGetIdentity();


    if (isLoading || !identity) {
        return <Typography>Loading...</Typography>;
    }

    const admin = identity.admin || {};

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 600 }}>
                {t('settings.header')}
            </Typography>
            <Grid container spacing={3}>
                {/* Admin Information Card */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={1} sx={{ padding: 2 }}>
                        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600, borderBottom: '2px solid #1976d2', paddingBottom: 1 }}>
                            {t('settings.adminInfo')}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>{t('settings.email')}</Typography>
                                <Typography variant="body2">{admin.email}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>{t('settings.firstName')}</Typography>
                                <Typography variant="body2">{admin.firstName}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>{t('settings.lastName')}</Typography>
                                <Typography variant="body2">{admin.lastName}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>{t('settings.appName')}</Typography>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>{admin.displayName}</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                {/* Driving School Information Card */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={1} sx={{ padding: 2 }}>
                        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600, borderBottom: '2px solid #1976d2', paddingBottom: 1 }}>
                            {t('settings.drivingSchoolInfo')}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>{t('settings.schoolNumber')}</Typography>
                                <Typography variant="body2">{admin.drivingSchoolNumber}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>{t('settings.companyName')}</Typography>
                                <Typography variant="body2">{admin.company}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>{t('settings.vatNumber')}</Typography>
                                <Typography variant="body2">{admin.vat}</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                {/* Address Information Card */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={1} sx={{ padding: 2 }}>
                        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600, borderBottom: '2px solid #1976d2', paddingBottom: 1 }}>
                            {t('settings.addressInfo')}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>{t('settings.address1')}</Typography>
                                <Typography variant="body2">{admin.address1}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>{t('settings.address2')}</Typography>
                                <Typography variant="body2">{admin.address2 || 'N/A'}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>{t('settings.city')}</Typography>
                                <Typography variant="body2">{admin.city}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>{t('settings.postalCode')}</Typography>
                                <Typography variant="body2">{admin.pincode}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>{t('settings.country')}</Typography>
                                <Typography variant="body2">{admin.country}</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SettingsList;
