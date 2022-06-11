import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Empresas from './routes/Empresas';
import Vagas from './routes/Vagas';
import Header from './components/Header';
import App from './routes/App';

function AppRoutes() {
  return (
    <div style={{
      overflow: "hidden"
    }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="vagas" element={<Vagas />} />
          <Route path="empresas" element={<Empresas />} />
        </Routes>
      </Router>
    </div>
  )
}

export default AppRoutes