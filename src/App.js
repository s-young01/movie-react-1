import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Community from './pages/Community';
import Main from './pages/Main';
import JoinPage from './pages/member/JoinPage';
import NewMoviePage from './pages/NewMoviePage';




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
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/latest/:no' element={<MovieDetail/>}/>
        <Route path='/free' element={<Community/>}/>
      </Routes>
    </div>
  );
}

export default App;
