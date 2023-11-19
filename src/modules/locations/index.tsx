import SearchView from "./components/search";
import ListView from "./components/list";
import { Route, Routes, useNavigate } from "react-router-dom";

const Locations = () => {
    const navigate = useNavigate();

    const navigateToSearch = () => {
        navigate('/locations/search')
    }

    const navigateToLocations = () => {
        navigate('/locations')
    }

    return (
        <Routes>
            <Route path="/search" element={<SearchView onDone={() => { }} onExit={navigateToLocations} />} />
            <Route path="/" element={<ListView onSearchClick={navigateToSearch} />} />
        </Routes>
    )
}

export default Locations;