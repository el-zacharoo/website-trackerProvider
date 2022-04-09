
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import PersonPinCircleRoundedIcon from '@mui/icons-material/PersonPinCircleRounded';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

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
        if (navigator.brave) {
            null
        } else {
            getData()
        }
        const fetchIP = async () => {
            const resp = await fetch('http://localhost:8080/ip', getReqInit);
            if (resp.ok) {
                const json = await resp.json();
                setIPAddress(json);
            }
        };
        fetchIP();
    }, []);
    console.log(ip)

    return (
        <Card sx={{ p: 2 }}>
            <Typography gutterBottom variant="h3">Hello, your IP address is</Typography>
            <Typography gutterBottom variant="h4">
                {ipAddress.IP}
            </Typography>
            <Chip color={ip ? "success" : "error"} label={ip ? ip.country_name : `Browser doesn't supoport geolocation`} icon={ip ? <PersonPinCircleRoundedIcon /> : <ErrorOutlineRoundedIcon />} />
        </Card>
    )
}
export default Home