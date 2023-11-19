import SearchView from "./components/search";
import ListView from "./components/list";
import { Route, Routes, useNavigate } from "react-router-dom";
import LocationsProviders from "./providers";

const Locations = () => {
    const navigate = useNavigate();

    const navigateToSearch = () => {
        navigate('/locations/search')
    }

    const navigateToLocations = () => {
        navigate('/locations')
    }

    return (
        <LocationsProviders>
            <Routes>
                <Route path="/search" element={<SearchView onDone={() => { }} onExit={navigateToLocations} />} />
                <Route path="/" element={<ListView onSearchClick={navigateToSearch} />} />
            </Routes >
        </LocationsProviders >
    )
}

export default Locations;