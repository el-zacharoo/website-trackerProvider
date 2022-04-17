import React from 'react';

import Typography from '@mui/material/Typography';
import { PrismicText } from '@prismicio/react';
import { PrismicRichText } from '@prismicio/react';
import * as PropTypes from 'prop-types';

export const Text = (props) => {
    const { value } = props;

    return (
        <Typography {...props}  >
            <PrismicText field={value} />
        </Typography>
    )
}
Text.propTypes = {
    value: PropTypes.array.isRequired,
};

export const RichText = (props) => {
    const { value } = props;

    return (
        <PrismicRichText
            field={value}
            components={{
                paragraph: ({ children }) => <Typography {...props} color="textSecondary" variant="body1">{children}</Typography>,
                heading4: ({ children }) => <Typography {...props} variant="h4">{children}</Typography>,
                heading5: ({ children }) => <Typography {...props} variant="h5">{children}</Typography>,
                heading6: ({ children }) => <Typography {...props} variant="h6">{children}</Typography>,
            }}
        />
    )
}
RichText.propTypes = {
    value: PropTypes.array.isRequired
}