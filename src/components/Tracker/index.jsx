import React, { useState, useEffect } from 'react';

import { Provider, useApi } from '@/components/Provider';

export const Tracker = (props) => {
    const { children, uid } = props
    return (
        <Provider>
            <UseTracker uid={uid}>
                {children}
            </UseTracker>
        </Provider>
    )
}
export default Tracker

const UseTracker = (props) => {
    const { children, uid } = props
    const [state, { create, getData }] = useApi();
    const [ip, setIP] = useState();
    const [geolocation, setGeolocation] = useState();

    useEffect(() => {
        setGeolocation(state.geolocation);
        getData({ setIP: setIP })
    }, [state.geolocation]);

    const push = () => {
        geolocation.country = ip && ip.country_name
        geolocation.countryCode = ip && ip.country_code
        geolocation.ipAddress = ip && ip.IPv4
        geolocation.platform = navigator.platform
        geolocation.page = uid
        create(geolocation)
    }
    useEffect(() => {
        if (ip === undefined) {
            null
        } else push()
    }, [ip])

    return (
        <>
            {children}
        </>
    )
}