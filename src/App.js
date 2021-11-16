import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/content/content';
import DialogsContainer from './components/messages/dialogsContainer';
import Music from './components/music/music';
import Nav from './components/navigation/nav';
import News from './components/news/news';
import Settings from './components/settings/settings';
import Titlename from './components/title/title';
import TitleNameSearch from './components/titleSearchName/titleSearch';
import SearchContainer from './components/search/searchContainer';

function App(props) {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <SearchContainer/>
      <Nav/>
      <Routes>
        <Route path='/profile' element={<Content/>}/>
        <Route path='/messages' element={<DialogsContainer/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
      <Titlename/>
      <TitleNameSearch/>
    </div>
    </BrowserRouter>
  );
}



export default App;
