import { useCallback } from "react";
import Header from "../../../../components/header";
import CustomMap from "../../../../components/map";
import CheckIcon from "../../../../icons/Check";
import CrossIcon from "../../../../icons/Cross";
import { useLocations } from "../../state";
import { Location } from "../../typings";
import styles from './styles.module.scss'

interface SearchViewProps {
    onDone?: () => void;
    onExit?: () => void;
}

const SearchView = ({
    onDone,
    onExit
}: SearchViewProps) => {
    const { locations, setLocations } = useLocations();

    const addLocation = useCallback((marker: Location) => {
        if (setLocations) {
            setLocations(locations => [...locations, marker])
        }
    }, [])

    return <div className={styles.searchView}>
        <Header description="Search or select a location on Map">
            <div className={styles.icons}>
                <CrossIcon onClick={onExit} size={20} />
                <CheckIcon onClick={onDone} size={20} />
            </div>
        </Header>
        <div className={styles.maps}>
            <CustomMap markers={locations} addMarker={addLocation} />
        </div>
    </div>
}

export default SearchView;