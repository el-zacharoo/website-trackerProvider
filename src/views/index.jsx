import React, { useEffect, useState } from 'react';

import { useApi } from '../components/Context';

export const Home = () => {
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
    }
    useEffect(() => {
        if (ip === undefined) {
            null
        }
        else return push()
    })

    return (
        <>
        </>
    )
}
export default Home