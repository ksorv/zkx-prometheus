import { useState } from 'react'
import styles from './styles.module.scss'
import LoaderIcon from '../../icons/Loader';
import Loader from '../loader';

export interface LocateProps {
    panMapTo: google.maps.Map['panTo']
}

const Locate = ({ panMapTo }: LocateProps) => {
    const [isPanning, setIsPanning] = useState(false);

    const panMapToLocation = (position: GeolocationPosition) => {
        setIsPanning(false);
        panMapTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        })
    }

    const onLocate = () => {
        setIsPanning(true);
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
            if (result.state === "granted") {
                navigator?.geolocation?.getCurrentPosition(panMapToLocation)
                return;
            } else if (result.state === "prompt") {
                navigator?.geolocation?.getCurrentPosition(panMapToLocation)
                return;
            } else if (result.state === "denied") {
                setIsPanning(false);
            }
        }).catch(() => {
            setIsPanning(false);
        })
    }

    return <button disabled={isPanning} className={styles.locateMe} onClick={onLocate}>
        {isPanning ? <Loader size={24} /> : <img src="/locate.svg" alt="locate me" />}
    </button>
}

export default Locate;