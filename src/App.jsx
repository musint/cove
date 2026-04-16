import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import DurationPicker from './screens/DurationPicker';
import FocusSession from './screens/FocusSession';
import SessionComplete from './screens/SessionComplete';
import RewardsShop from './screens/RewardsShop';

function Placeholder({ name }) {
  return (
    <div className="bg-home" style={{ color: 'white', padding: '2rem', minHeight: '100vh' }}>
      <h2>{name}</h2>
      <p style={{ opacity: 0.5, marginTop: '8px' }}>Coming soon</p>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/duration" element={<DurationPicker />} />
        <Route path="/focus" element={<FocusSession />} />
        <Route path="/complete" element={<SessionComplete />} />
        <Route path="/rewards" element={<RewardsShop />} />
        <Route path="/stats" element={<Placeholder name="Stats" />} />
      </Routes>
    </HashRouter>
  );
}
