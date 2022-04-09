// import { palette } from './palette';

export const components = {
    MuiCssBaseline: {
        '@global': {
        }
    },
    MuiButton: {
        styleOverrides: {
            root: {
                lineHeight: '1.5rem',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem'
            },
            text: {
                marginLeft: '1.2rem',
                marginRight: '1.2rem',
                borderRadius: 0
            },
            contained: {
                boxShadow: 'none',
                paddingLeft: '1.2rem',
                paddingRight: '1.2rem',

            },
            outlined: {
                paddingLeft: '1.2rem',
                paddingRight: '1.2rem',
            }
        }
    },

}