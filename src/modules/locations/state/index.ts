import { createContext, useContext, useEffect, useState } from "react"
import { Location } from "../typings";

export const LOCATION_KEY = '__location__'

export const getLocationsFromStorage = () => {
    let parsedLocations: Array<Location> = [];
    const data = localStorage.getItem(LOCATION_KEY) || '[]';

    try {
        parsedLocations = JSON.parse(data)
    } catch {
        // noop
    }

    return parsedLocations;
}

const setLocationsInStorage = (locations: Array<Location>) => {
    localStorage.setItem(LOCATION_KEY, JSON.stringify(locations))
}

export const LocationsContext = createContext<Array<Location>>([]);
export const SetLocationsContext = createContext<React.Dispatch<React.SetStateAction<Location[]>> | null>(null);

export const useLocations = () => {
    const state = useContext(LocationsContext);
    const setState = useContext(SetLocationsContext);

    useEffect(() => {
        if (state) {
            setLocationsInStorage(state);
        }
    }, [state])

    return {
        locations: state,
        setLocations: setState
    }
}