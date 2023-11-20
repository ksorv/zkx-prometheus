import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { Location } from "../typings";
import isSameLocation from "../utils/location";

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

    const addLocation = useCallback((location: Location) => {
        setState?.(state => {
            return ([
                location,
                ...(state.filter((stateLocation) => {
                    return !isSameLocation(location, stateLocation)
                }))
            ])
        })
    }, [])

    const deleteLocation = useCallback((location: Location) => {
        setState?.(state => state.filter((stateLocation) => !isSameLocation(location, stateLocation)))
    }, [])

    useEffect(() => {
        if (state) {
            setLocationsInStorage(state);
        }
    }, [state])

    return {
        locations: state,
        setLocations: setState,
        addLocation,
        deleteLocation
    }
}