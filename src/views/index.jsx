
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const Home = () => {
    const [ipAddress, setIPAddress] = useState([]);
    const [ip, setIP] = useState('');

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data)
    }

    const getReqInit = {
        method: "GET",
        mode: 'cors',
        headers: {
            Accept: 'application/ json',
            'Content-Type': 'application/json'
        },
    }

    useEffect(() => {
        getData()
        const fetchIP = async () => {
            const resp = await fetch('http://localhost:8080/ip', getReqInit);
            if (resp.ok) {
                const json = await resp.json();
                setIPAddress(json);
            }
        };
        fetchIP();
    }, []);


    return (
        <Card sx={{ p: 2 }}>
            <Typography gutterBottom variant="h3">Hello, your IP address is</Typography>

            <Typography gutterBottom variant="h4">
                {ipAddress.IP}
            </Typography>
            {navigator.brave ?
                <Typography>Brave doesn't support this detection</Typography>
                :
                <Typography>{ip.country_name}</Typography>
            }
        </Card>

    )
}
export default Home