import { Location } from "../typings";

const makeKeyFromLocation = (location: Location) => {
    return `location-${location.lan}-${location.lon}`
}

export default makeKeyFromLocation;