import { OpenApiResponse } from "../../../typings/open-api";
import { urlCreator } from "../../../utils/url";
import { Location } from "../typings";

const fetchWeather = (location: Location) => {
    return fetch(urlCreator({
        baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
        query: {
            lat: location.lan,
            lon: location.lon,
            exclude: ["minutely", "hourly", "daily", "alerts"],
            units: 'metric',
            appId: process.env.REACT_APP_OPENAPI_KEY
        }
    })).then((r) => r.json() as Promise<OpenApiResponse>)
}

export default fetchWeather;