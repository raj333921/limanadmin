import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useGetIdentity } from 'react-admin';

const Header = (props) => {
    const { identity } = useGetIdentity();

    return (
        <AppBar {...props} position="static" sx={{ backgroundColor: '#fafafa', color: 'rgba(0, 0, 0, 0.87)', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
                    Driving School Admin
                </Typography>
                {identity && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body2">
                            Welcome, <strong>{identity.admin?.displayName || 'Admin'}</strong>
                        </Typography>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
