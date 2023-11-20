import { useCallback, useState } from "react";
import Header from "../../../../components/header";
import CustomMap from "../../../../components/map";
import CheckIcon from "../../../../icons/Check";
import CrossIcon from "../../../../icons/Cross";
import { useLocations } from "../../state";
import { Location } from "../../typings";
import styles from './styles.module.scss'
import { useNavigate } from "react-router-dom";

const SearchView = () => {
    const navigate = useNavigate();
    const [marker, setMarker] = useState<Location | undefined>();
    const { addLocation } = useLocations();

    const addMarkerToLocations = useCallback(() => {
        if (marker) {
            addLocation(marker)
            navigate('/locations')
        }
    }, [marker])

    const onExit = () => {
        navigate('/locations')
    }

    return <div className={styles.searchView}>
        <Header description={marker ? `${marker.lan.toFixed(3)}, ${marker.lon.toFixed(3)}` : "Search or select a location on Map"}>
            <div className={styles.icons}>
                <CrossIcon onClick={onExit} size={20} />
                <CheckIcon onClick={addMarkerToLocations} size={20} />
            </div>
        </Header>
        <div className={styles.maps}>
            <CustomMap marker={marker} addMarker={setMarker} />
        </div>
    </div>
}

export default SearchView;