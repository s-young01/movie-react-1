import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Community from './pages/Community';
import Main from './pages/Main';
import JoinPage from './pages/member/JoinPage';
import LoginPage from './pages/member/LoginPage';
import RecomendPage from './pages/RecomendPage';
import MonthRecoPage from './pages/subpages/MonthRecoPage';
import YetMoviePage from './pages/subpages/YetMoviePage';
import MoviePostContainer from './container/MoviePostContainer';
import MoviePostDetail from './container/MoviePostDetail';
import './App.css';
import FindId from './pages/member/FindId';


function App() {
  return (
    <div className="App" >
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/join' element={<JoinPage/>}/>
        <Route path='/latest' element={<MoviePostContainer/>}/>
        <Route path='/yet' element={<YetMoviePage/>}/>
        <Route path='/recomend' element={<RecomendPage/>}/>
        <Route path='/month' element={<MonthRecoPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/latest/:no' element={<MoviePostDetail/>}/>
        <Route path='/free' element={<Community/>}/>
        <Route path='/findid' element={<FindId/>}/>
      </Routes>
    </div>
  );
}

export default App;
