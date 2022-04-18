import React from 'react';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';

export const Viewport = ({ children }) => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}
        >
            <Header />
            {children}
            <Footer />
        </Box>
    );
}

export default Viewport;

Viewport.propTypes = {
    children: PropTypes.node.isRequired,
}