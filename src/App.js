import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Profile } from './components/Profile';
import WordChanger from './components/Dashboard/WordChanger';
import PDFViewer from './components/PDFViewer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} ></Route>
        <Route path='/profile' element={<Profile />} ></Route>
        <Route path='/word' element={<WordChanger />} ></Route>
        <Route path='/resume' element={<PDFViewer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
