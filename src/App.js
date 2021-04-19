import './App.css';
import Video from './Video/Video';
import { Link, Route } from 'react-router-dom';

const App = ()  => {
  return (
    <div className="App">
      <header>
        <h1>HAPPY BIRTHDAY MOM</h1>
      </header>
      <Link to="/video">CLICK ME</Link>
      <Route path="/video">
        <Video/>
      </Route>
    </div>
  );
}

export default App;
