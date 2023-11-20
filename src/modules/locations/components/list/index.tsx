import { useQueries } from "react-query";
import Header from "../../../../components/header";
import LocationWeather from "../../../../components/location-weather";
import SearchIcon from "../../../../icons/Search";
import { useLocations } from "../../state";
import makeKeyFromLocation from "../../utils/cache";
import fetchWeather from "../../requests/fetch-weather";
import styles from './styles.module.scss'

interface ListViewProps {
    onSearchClick: () => void;
}

const ListView = ({ onSearchClick }: ListViewProps) => {
    const { locations, deleteLocation } = useLocations();

    const data = useQueries(locations.map(location => {
        return {
            queryKey: ['user', makeKeyFromLocation(location)],
            queryFn: () => fetchWeather(location),
        }
    }))

    if (!locations.length) {
        return <div className={styles.listView}>
            <Header>
                <SearchIcon size={20} onClick={onSearchClick} />
            </Header>
            <div className={styles.list}>
                Please search and add locations to see weather
            </div>
        </div>
    }

    return (
        <div className={styles.listView}>
            <Header>
                <SearchIcon size={20} onClick={onSearchClick} />
            </Header>
            <div className={styles.list}>
                {locations.map((location, idx) => (
                    <LocationWeather
                        key={makeKeyFromLocation(location)}
                        isLoading={data[idx].isLoading}
                        isError={data[idx].isError}
                        data={data[idx].data}
                        location={location}
                        onDelete={() => deleteLocation(location)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListView;