import SearchView from "./components/search";
import ListView from "./components/list";
import { Route, Routes, useNavigate } from "react-router-dom";
import LocationsProviders from "./providers";

const Locations = () => {
    const navigate = useNavigate();

    const navigateToSearch = () => {
        navigate('/locations/search')
    }

    return (
        <LocationsProviders>
            <Routes>
                <Route
                    path="/search"
                    element={
                        <SearchView />
                    }
                />
                <Route
                    path="/"
                    element={
                        <ListView
                            onSearchClick={navigateToSearch}
                        />
                    }
                />
            </Routes >
        </LocationsProviders >
    )
}

export default Locations;