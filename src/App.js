import { Routes, Route } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Dashboard from './Components/Dashboard';
import ChartPage from './Components/ChartPage';
import TaskPage from './Components/TaskPage';
import PeoplePage from './Components/PeoplePage';
import Nav from "./Components/Nav";
import Header from './Components/Header';

function App() {
  return (
    <div className="app w-full h-screen bg-slate-500 dark:bg-slate-200 flex items-center justify-center">
      <div className="container h-[97%] w-[97%] max-w-screen-full bg-slate-900 rounded-lg dark:bg-gray-500 flex flex-col md:flex-row">
        <div className="navigation_part w-full md:w-[15%] lg:w-[10%]">
          <Nav />
        </div>
        <div className="content w-full md:w-[85%] lg:w-[90%] h-full p-4 flex flex-col">
          <div className='header w-full mb-2'>
            <Header />
          </div>
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ChartPage" element={<ChartPage />} />
              <Route path="/TaskPage" element={<TaskPage />} />
              <Route path="/PeoplePage" element={<PeoplePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
