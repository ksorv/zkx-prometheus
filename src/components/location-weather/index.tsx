import styles from './styles.module.scss'
import { OpenApiResponse } from '../../typings/open-api';
import ArrowDownIcon from '../../icons/ArrowDown';
import ArrowPointerIcon from '../../icons/ArrowPointer';

interface LocationWeatherProps {
    weather: OpenApiResponse
}

const LocationWeather = ({
    weather
}: LocationWeatherProps) => {
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
    } = weather;

    return (
        <div className={styles.location}>
            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <div className={styles.tempContainer}>
                        <span className={styles.temp}>{temp}</span>
                    </div>
                    <div className={styles.cityContainer}>
                        <div className={styles.city}>{city} | {lon}, {lat}</div>
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