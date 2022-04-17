import React, { useState, useEffect } from 'react';

import { Provider, useApi } from '@/components/Provider';
import { useParams } from 'react-router-dom';

export const Tracker = ({ children }) => {
    return (
        <Provider>
            <UseTracker>
                {children}
            </UseTracker>
        </Provider>
    )
}
export default Tracker

const UseTracker = ({ children }) => {
    const { uid } = useParams();
    const [state, { create, getData }] = useApi();
    const [ip, setIP] = useState();
    const [geolocation, setGeolocation] = useState();

    console.log(uid)

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
    }
    useEffect(() => {
        if (ip === undefined) {
            null
        }
        else return push()
    })

    return (
        <>
            {children}
        </>
    )
}