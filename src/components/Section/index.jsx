import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import * as PropTypes from 'prop-types';

import { Text, RichText } from '@/components/Text';

export const Section = ({ slice }) => {
    const left = () => {
        if (slice.primary.text_direction === null) {
            return 'Left'
        }
        if (slice.primary.text_direction === 'Left') {
            return 'Left'
        }
    }
    const direction = left()
    const background = direction ? { backgroundColor: 'background.paper', py: 6 } : { py: 6 }

    return (
        <Box sx={background}>
            <Container maxWidth="lg" >
                {direction && <Left slice={slice} />}
                {slice.primary.text_direction === 'Centre' && <Centred slice={slice} />}
                {slice.primary.text_direction === 'Right' && <Right slice={slice} />}
            </Container>
        </Box>
    )
}

Section.propTypes = {
    slice: PropTypes.any,
};

const Left = ({ slice }) => {
    return (
        <Grid
            container
            justifyContent="center"
            direction={{ xs: 'column-reverse', md: 'row' }}
            spacing={2}
        >
            <Grid item xs={12} md={6}>
                <Text variant="h2" value={slice.primary.title} />
                <Text variant="h4" value={slice.primary.subheader} />
                <RichText value={slice.primary.description} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' } }}>
                    {slice.primary.image.url &&
                        <CardMedia component="img" sx={{ maxWidth: '25rem' }}
                            image={slice.primary.image.url} alt={slice.primary.image.alt} />
                    }
                </Box>
            </Grid>
        </Grid >
    )
}
Left.propTypes = {
    slice: PropTypes.object,
};

const Centred = ({ slice }) => {
    return (
        <Grid
            container
            spacing={2}
            direction={{ xs: 'column-reverse', md: 'column' }}
            justifyContent="center"
        >
            <Grid item>
                <Text variant="h2" textAlign={{ md: "center" }} value={slice.primary.title} />
                <Text variant="h4" value={slice.primary.subheader} />
                <RichText sx={{ display: 'flex', justifyContent: { md: 'center' } }} value={slice.primary.description} />
            </Grid>
            <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                {slice.primary.image.url &&
                    <CardMedia sx={{ maxWidth: '20rem' }} component="img"
                        image={slice.primary.image.url} alt={slice.primary.image.alt} />
                }
            </Grid>
        </Grid >
    )
}
Centred.propTypes = {
    slice: PropTypes.object,
};

const Right = ({ slice }) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            spacing={2}
        >
            <Grid item sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }} xs={12} md={6}>
                {slice.primary.image.url &&
                    <CardMedia component="img" sx={{ maxWidth: '25rem' }}
                        image={slice.primary.image.url} alt={slice.primary.image.alt} />
                }
            </Grid>
            <Grid item xs={12} md={6}>
                <Text variant="h2" value={slice.primary.title} />
                <Text variant="h4" value={slice.primary.subheader} />
                <RichText value={slice.primary.description} />
            </Grid>
        </Grid>
    )
}
Right.propTypes = {
    slice: PropTypes.object,
};

// const Wrapper = ({ children }) => {
//     const [home] = useSinglePrismicDocument("home");
//     return (
//         <>
//             {home && home.data.body.map((e, i) =>
//                 <Box sx={!(i % 2) ? { backgroundColor: 'background.paper' } : {}} key={i}>
//                     {children}
//                 </Box >
//             )}
//         </>
//     )
// }
// Wrapper.propTypes = {
//     children: PropTypes.any,
// };