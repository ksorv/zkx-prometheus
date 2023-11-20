import { Location } from "../typings";

const isSameLocation = (aLocation: Location, bLocation: Location) => {
    return aLocation.lan === bLocation.lan && aLocation.lon === bLocation.lon
}

export default isSameLocation