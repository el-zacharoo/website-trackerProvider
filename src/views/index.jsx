import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';

import { useApi } from '../components/Context';

export const Home = () => {
    const [open, setOpen] = useState(true)
    const [state, { create, getData }] = useApi();
    const [ip, setIP] = useState();
    const [geolocation, setGeolocation] = useState();

    useEffect(() => {
        setGeolocation(state.geolocation);
        if (navigator.brave) {
            null
        } else {
            getData({ setIP: setIP })
        }
    }, [state.geolocation]);

    const push = () => {
        geolocation.country = ip && ip.country_name
        geolocation.countryCode = ip && ip.country_code
        geolocation.ipAddress = ip && ip.IPv4
        geolocation.platform = navigator.platform
        create(geolocation)
        setOpen(false)
    }

    return (
        <Dialog open={open}>
            <CardHeader title="Before we begin" subheader="this site would like to use your location" />
            <CardActions>
                <Button fullWidth color="secondary" variant="contained" onClick={push}>Allow location</Button>
            </CardActions>
        </Dialog>
    )
}
export default Home