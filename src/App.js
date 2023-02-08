import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Community from './pages/Community';
import Main from './pages/Main';
import JoinPage from './pages/member/JoinPage';
import LoginPage from './pages/member/LoginPage';
import MonthRecoPage from './pages/subpages/MonthRecoPage';
import YetMoviePage from './pages/subpages/YetMoviePage';
import MoviePostContainer from './container/MoviePostContainer';
import MoviePostDetail from './container/MoviePostDetail';
import './App.css';
import FindId from './pages/member/FindId';
import FindPass from './pages/member/FindPass';
import RecomendPostContainer from './container/RecomendPostContainer';
import WriteText from './pages/WriteText';
import Editpass from './pages/member/Editpass';


function App() {
  return (
    <div className="App" >
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/join' element={<JoinPage/>}/>
        <Route path='/latest' element={<MoviePostContainer/>}/>
        <Route path='/yet' element={<YetMoviePage/>}/>
        <Route path='/recomend' element={<RecomendPostContainer/>}/>
        <Route path='/month' element={<MonthRecoPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/latest/:no' element={<MoviePostDetail/>}/>
        <Route path='/free' element={<Community/>}/>
        <Route path='/write' element={<WriteText/>}/>
        <Route path='/findid' element={<FindId/>}/>
        <Route path='/findpass' element={<FindPass/>}/>
        <Route path='/editpass' element={<Editpass/>}/>
      </Routes>
    </div>
  );
}

export default App;
