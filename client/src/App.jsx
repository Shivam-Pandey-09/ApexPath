import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Analyze from './pages/Analyze';
import DSASheet from './pages/DSASheet';
import Plan from './pages/Plan';

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/sheet" element={<DSASheet />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
      </main>
    </div>
  );
}
