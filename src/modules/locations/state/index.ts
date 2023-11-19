import { useEffect, useRef, useState } from "react"
import { Location } from "../typings";

const LOCATION_KEY = '__location__'

export const useLocations = () => {
    const mountRef = useRef(false);
    const [locations, setLocations] = useState<Array<Location>>([
        {
            lon: -0.1181,
            lan: 51.5099
        },
        {
            lon: -1.1181,
            lan: 21.5099
        },
        {
            lon: -2.1181,
            lan: 11.5099
        },
        {
            lon: -0.1181,
            lan: 81.5099
        }
    ]);

    useEffect(() => {
        if (mountRef.current) {
            return;
        }

        let parsedLocations = [];
        const data = localStorage.getItem(LOCATION_KEY) || '[]';

        try {
            parsedLocations = JSON.parse(data)
        } catch {
            // noop
        }

        setLocations([...locations, ...parsedLocations]);
        mountRef.current = true;
    }, []);

    return { locations, setLocations };
}