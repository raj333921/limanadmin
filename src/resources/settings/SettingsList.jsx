import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import { Card, CardContent, Typography, Box, Grid, Paper } from '@mui/material';
import { useGetIdentity } from 'react-admin';

const SettingsList = (props) => {
    const { identity, isLoading } = useGetIdentity();

    if (isLoading || !identity) {
        return <Typography>Loading...</Typography>;
    }

    const admin = identity.admin || {};

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 600 }}>
                Driving School Settings
            </Typography>

            <Grid container spacing={3}>
                {/* Admin Information Card */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={1} sx={{ padding: 2 }}>
                        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600, borderBottom: '2px solid #1976d2', paddingBottom: 1 }}>
                            Admin Information
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>ID</Typography>
                                <Typography variant="body2">{admin.id}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>Email</Typography>
                                <Typography variant="body2">{admin.email}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>First Name</Typography>
                                <Typography variant="body2">{admin.firstName}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>Last Name</Typography>
                                <Typography variant="body2">{admin.lastName}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>Display Name</Typography>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>{admin.displayName}</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                {/* Driving School Information Card */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={1} sx={{ padding: 2 }}>
                        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600, borderBottom: '2px solid #1976d2', paddingBottom: 1 }}>
                            Driving School Information
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>School Number</Typography>
                                <Typography variant="body2">{admin.drivingSchoolNumber}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>Company</Typography>
                                <Typography variant="body2">{admin.company}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>VAT Number</Typography>
                                <Typography variant="body2">{admin.vat}</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                {/* Address Information Card */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={1} sx={{ padding: 2 }}>
                        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600, borderBottom: '2px solid #1976d2', paddingBottom: 1 }}>
                            Address Information
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>Address Line 1</Typography>
                                <Typography variant="body2">{admin.address1}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>Address Line 2</Typography>
                                <Typography variant="body2">{admin.address2 || 'N/A'}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>City</Typography>
                                <Typography variant="body2">{admin.city}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>Postal Code</Typography>
                                <Typography variant="body2">{admin.pincode}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#666' }}>Country</Typography>
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
