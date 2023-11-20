import { Navigate, Route, Routes } from 'react-router-dom';
import Locations from './modules/locations';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/locations/*"
          element={<Locations />}
        />
        <Route path='/' element={<Navigate to={'/locations'} />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
