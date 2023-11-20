import { Location } from "../typings";

const makeKeyFromLocation = (location: Location, prefix?: string) => {
    return `${prefix ? prefix + '-' : ''}location-${location.lan}-${location.lon}`
}

export default makeKeyFromLocation;