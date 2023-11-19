import Header from "../../../components/header";
import LocationWeather from "../../../components/location-weather";
import SearchIcon from "../../../icons/Search";
import { useLocations } from "../state";
import makeKeyFromLocation from "../utils/cache";

interface ListViewProps {
    onSearchClick: () => void;
}

const ListView = ({ onSearchClick }: ListViewProps) => {
    const { locations, setLocations } = useLocations();

    return <div>
        <Header>
            <SearchIcon size={20} onClick={onSearchClick} />
        </Header>
        <div style={{
            padding: '16px 60px'
        }}>
            {locations.map(location => (
                <LocationWeather
                    key={makeKeyFromLocation(location)}
                    location={location}
                />
            )
            )}
        </div>
    </div>
}

export default ListView;