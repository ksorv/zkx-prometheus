import { Route, Routes } from 'react-router-dom';
import Home from './modules/locations';
import Locations from './modules/locations';

function App() {
  return (
    <Routes>
      <Route
        path="/locations/*"
        element={<Locations />}
      />
    </Routes>
  );
}

export default App;
