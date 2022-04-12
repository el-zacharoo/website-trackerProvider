import React, { createContext, useContext, useCallback, useMemo, useReducer } from 'react';

import cloneDeep from 'lodash.clonedeep';

const reducer = (state, action) => {
    const newState = cloneDeep(state);
    switch (action.type) {
        case 'init':
            newState.pending = true;
            newState.error = null;
            return newState;
        case 'post':
            newState.pending = false;
            newState.geolocation = action.payload;
            newState.geolocation.push(action.payload)
            newState.geolocation.matches++;
            return newState;
        case 'error':
            console.error(action.error);
            newState.pending = false;
            newState.error = action.error.message;
            return newState;
        default:
            throw new Error('Unknown action type in entity reducer');
    }
};

const initialState = {
    pending: false,
    geolocation: {
        country: '',
        countryCode: '',
        ipAddress: '',
    },
    error: null,
};

const Context = createContext(initialState);
export const GeoProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    );
};

export const useApi = () => {
    const { state, dispatch } = useContext(Context);

    const create = useCallback(async (geolocation) => {
        const reqInit = {
            method: "POST",
            headers: {
                Accept: 'application/ json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(geolocation)
        }
        const resp = await fetch('http://localhost:8080/geo', reqInit);
        if (resp.ok) {
            dispatch({ type: 'post', payload: await resp.json() });
            console.log(state)
        } else {
            dispatch({ type: 'error', error: resp.Error, meta: { method: 'post' } });
        }

    }, [dispatch]);


    const actions = useMemo(() => {
        return { create }
    }, [create]);

    return [state, actions];
}