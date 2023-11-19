import { useState } from "react"
import { LocationsContext, SetLocationsContext, getLocationsFromStorage } from "./state"
import { Location } from "./typings"

interface LocationsProviders {
    children: React.ReactNode | React.ReactNode[]
}

const LocationsProviders = ({ children }: LocationsProviders) => {
    const [locations, setLocations] = useState<Array<Location>>(getLocationsFromStorage);

    return (
        <LocationsContext.Provider value={locations}>
            <SetLocationsContext.Provider value={setLocations}>
                {children}
            </SetLocationsContext.Provider>
        </LocationsContext.Provider>
    )
}

export default LocationsProviders;