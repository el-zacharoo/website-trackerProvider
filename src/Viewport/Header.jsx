import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import PersonPinCircleRoundedIcon from '@mui/icons-material/PersonPinCircleRounded';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { usePrismicDocumentByUID } from '@prismicio/react';

export const Header = () => {
    const [document] = usePrismicDocumentByUID('assembly', 'menu');

    return (
        <AppBar elevation={1} color="secondary" position="relative" sx={{ padding: 1 }}>
            {document &&
                <Toolbar variant='dense' sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <Link underline="none" sx={{ display: 'flex', '& svg': { fontSize: '2rem', mr: 1 }, alignItems: 'center', color: 'info.main' }} component={RouterLink} to="/">
                        <PersonPinCircleRoundedIcon alt="" color="info" />
                        <Typography variant="h4">{import.meta.env.VITE_APP_NAME}</Typography>
                    </Link>
                    <Box>
                        {document.data.nav.map((item, i) =>
                            <Button color="info" key={i} component={RouterLink} to={item.nav_items.uid} >{item.nav_items.uid}</Button>
                        )}
                    </Box>
                </Toolbar>
            }
        </AppBar>
    )
}

Header.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Header;
