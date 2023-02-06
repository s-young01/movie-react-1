import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
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
      </Routes>
    </div>
  );
}

export default App;
