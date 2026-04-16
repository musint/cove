import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Placeholder({ name }) {
  return <div style={{ color: 'white', padding: '2rem' }}>{name}</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Placeholder name="Home" />} />
        <Route path="/duration" element={<Placeholder name="Duration Picker" />} />
        <Route path="/focus" element={<Placeholder name="Focus Session" />} />
        <Route path="/complete" element={<Placeholder name="Session Complete" />} />
        <Route path="/rewards" element={<Placeholder name="Rewards Shop" />} />
      </Routes>
    </BrowserRouter>
  );
}
