import styles from './styles.module.scss'
import ArrowDownIcon from '../../icons/ArrowDown';
import ArrowPointerIcon from '../../icons/ArrowPointer';
import { Location } from '../../modules/locations/typings';
import makeKeyFromLocation from '../../modules/locations/utils/cache';
import { useQuery } from 'react-query';
import fetchWeather from '../../modules/locations/requests/fetch-weather';
import { useCallback } from 'react';
import Loader from '../loader';
import { OpenApiResponse } from '../../typings/open-api';

interface LocationWeatherProps {
    data?: OpenApiResponse;
    isLoading: boolean;
    isError: boolean;
}

const LocationWeather = ({
    isLoading,
    isError,
    data
}: LocationWeatherProps) => {
    if (isLoading) {
        return <div className={styles.locationLoader}>
            <Loader text="Loading weather..." />
        </div>
    }

    if (isError || !data) {
        // noop for now
        return null;
    }

    const {
        main: {
            temp,
            humidity
        },
        wind: {
            speed
        },
        weather: [{
            description
        }],
        coord: {
            lat,
            lon,
        },
        name: city
    } = data;

    return (
        <div className={styles.location}>
            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <div className={styles.tempContainer}>
                        <span className={styles.temp}>{temp}</span>
                    </div>
                    <div className={styles.cityContainer}>
                        <div className={styles.city}>{city ? `${city} | ` : ''}{lon}, {lat}</div>
                        <div className={styles.weatherStatus}>{description}</div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.deleteButton}>Delete</button>
                    <button className={styles.arrowButton}><ArrowDownIcon size={14} /></button>
                </div>
            </div>
            <div className={styles.weather}>
                <div className={styles.windSpeed}>
                    <span>Wind Speed</span>
                    <ArrowPointerIcon size={18} />
                    <span>{speed}</span>
                </div>
                <div className={styles.humidity}>Humidity {humidity}</div>
            </div>
        </div>
    );
}

export default LocationWeather;