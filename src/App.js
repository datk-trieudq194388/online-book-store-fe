import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './router';
import PublicLayout from './Layout/PublicLayout';

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((e) => 
          <Route
            key={e.key}
            path={e.path}
            exact={e.exact}
            element={<PublicLayout>{e.element}</PublicLayout>}
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
