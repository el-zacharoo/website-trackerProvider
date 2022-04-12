import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';

import { useApi } from '../components/Context';
import { Typography } from '@mui/material';

export const Home = () => {
    const [open, setOpen] = useState(true)
    const [state, { create }] = useApi();
    const [ip, setIP] = useState();
    const [geolocation, setGeolocation] = useState();

    useEffect(() => {
        setGeolocation(state.geolocation);
    }, [state.geolocation]);

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data)
    }

    const push = () => {
        geolocation.country = ip.country_name
        geolocation.countryCode = ip.country_code
        geolocation.ipAddress = ip.IPv4
        geolocation.platform = navigator.platform
        create(geolocation)
        setOpen(false)
    }

    useEffect(() => {
        if (navigator.brave) {
            null
        } else {
            getData()
        }
    }, []);

    console.log(navigator)

    return (
        <Dialog open={open}>
            <DialogTitle >Before we begin</DialogTitle>
            <Typography sx={{ p: 2 }}>this site would like to use your location</Typography>
            <Button color="secondary" variant="contained" onClick={push}>allow location</Button>
        </Dialog>
    )
}
export default Home