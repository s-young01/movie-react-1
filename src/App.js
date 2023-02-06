import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import JoinPage from './pages/member/JoinPage';
import NewMoviePage from './pages/NewMoviePage';
import RecomendPage from './pages/RecomendPage';
import MonthRecoPage from './pages/subpages/MonthRecoPage';
import YetMoviePage from './pages/subpages/YetMoviePage';




function App() {
  return (
    <div className="App" >
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/join' element={<JoinPage/>}/>
        <Route path='/latest' element={<NewMoviePage/>}/>
        <Route path='/yet' element={<YetMoviePage/>}/>
        <Route path='/recomend' element={<RecomendPage/>}/>
        <Route path='/month' element={<MonthRecoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
