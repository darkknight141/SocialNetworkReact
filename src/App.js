import './App.css';
import Content from './components/content/content';
import Nav from './components/navigation/nav';
import Seacrh from './components/search/search';
import Titlename from './components/title/title';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import DialogsContainer from './components/messages/dialogsContainer';

function App(props) {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Seacrh/>
      <Nav/>
      <Routes>
        <Route path='/profile' element={<Content store={props.store} />}/>
        <Route path='/messages' element={<DialogsContainer store={props.store} />}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
      <Titlename/>
    </div>
    </BrowserRouter>
  );
}



export default App;
