import './App.css';
import NotFound from './NotFound';
import Main from './Main';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/rgb/:red/:green/:blue" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
