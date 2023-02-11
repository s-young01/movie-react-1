import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Community from './pages/Community';
import Main from './pages/Main';
import JoinPage from './pages/member/JoinPage';
import LoginPage from './pages/member/LoginPage';
import MoviePostContainer from './container/MoviePostContainer';
import MoviePostDetail from './container/MoviePostDetail';
import './App.css';
import FindId from './pages/member/FindId';
import FindPass from './pages/member/FindPass';
import RecomendPostContainer from './container/RecomendPostContainer';
import WriteText from './pages/WriteText';
import Editpass from './pages/member/Editpass';
import GenreContainer from './container/GenreContainer';
import DetailView from './pages/DetailView';
import YetMovieCon from './container/YetMovieCon';
import MonthRecoContainer from './container/MonthRecoContainer';


function App() {
  return (
    <div className="App" >
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/join' element={<JoinPage/>}/>
        <Route path='/latest' element={<MoviePostContainer/>}/>
        <Route path='/yet' element={<YetMovieCon/>}/>
        <Route path='/recomend' element={<RecomendPostContainer/>}/>
        <Route path='/month' element={<MonthRecoContainer/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/detail/:no' element={<MoviePostDetail/>}/>
        <Route path='/free' element={<Community/>}/>
        <Route path='/write' element={<WriteText/>}/>
        <Route path='/findid' element={<FindId/>}/>
        <Route path='/findpass' element={<FindPass/>}/>
        <Route path='/editpass' element={<Editpass/>}/>
        <Route path='/genrepage' element={<GenreContainer/>}/>
        <Route path='/editpass' element={<Editpass/>}/>
        <Route path='/detailfree' element={<DetailView/>}/>
      </Routes>
    </div>
  );
}

export default App;
