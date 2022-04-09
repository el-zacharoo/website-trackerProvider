import React from 'react';

import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export const Header = () => {
    return (
        <AppBar elevation={1} color="secondary" position="relative" sx={{ padding: 1, }}>
            <Toolbar variant='dense' sx={{ display: 'flex', alignItems: 'center', }}>
                <Link underline="none" sx={{ display: 'flex', '& svg': { fontSize: '2rem', mr: 1 }, alignItems: 'center', color: 'info.main' }} href="https://credibil.netlify.app/">
                    <FingerprintIcon alt="" color="info" />
                    <Typography variant="h4">  {import.meta.env.VITE_APP_NAME}</Typography>
                </Link>
            </Toolbar>
        </AppBar >
    )
}

Header.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Header;
