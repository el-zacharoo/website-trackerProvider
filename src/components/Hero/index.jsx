import React from 'react';

import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import { PrismicLink, PrismicText } from '@prismicio/react';
import * as PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { Text } from '../Text';

export const Hero = ({ slice }) => {
    const prop = slice.items[0]

    return (
        <Stack sx={{ pt: 12, backgroundColor: 'primary.main' }}>
            {slice &&
                <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }} >
                    <Text textAlign="center" color="info.main" sx={{ maxWidth: '38rem' }} variant="h1" value={prop.title} />
                    <Text textAlign="center" color="info.main" sx={{ py: 3, maxWidth: '30rem' }} variant="subtitle2" value={prop.subheader} />
                    <Stack direction="row" spacing={2} sx={{ py: 3 }}>
                        <CtaLink sx={{ px: '2rem' }} field={prop.cta_action} variant="contained" value={prop.cta_label} />
                    </Stack>
                    {prop.image &&
                        <CardMedia sx={{ borderRadius: 2, maxWidth: '44rem', px: { xs: 2, sm: 4, md: 0 } }}
                            component="img" image={prop.image.url}
                            alt={prop.image.alt} />
                    }
                </Container>
            }
        </Stack >
    )
}
export default Hero

const CtaLink = (props) => {
    const { value, variant } = props;

    return (
        <PrismicLink {...props} color={variant === 'outlined' ? 'info' : 'secondary'}
            internalComponent={({ href, ...props }) => (
                <Button to={href} component={RouterLink} {...props} />
            )}
            externalComponent={Button} >
            <PrismicText field={value} />
        </PrismicLink>
    )
}

CtaLink.propTypes = {
    value: PropTypes.array.isRequired,
    variant: PropTypes.string.isRequired,
};