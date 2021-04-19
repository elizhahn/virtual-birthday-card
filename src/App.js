import './App.css';
import Video from './Video/Video';
import { Link, Route } from 'react-router-dom';

const App = ()  => {
  return (
    <div className="App">
    <Route exact path="/">
      <header>
        <h1 className="title">HAPPY BIRTHDAY MOM</h1>
      </header>
      <section className="btn-container">
        <Link to="/video" className="video-link">
          <div className="video-link-background">
            <p className="video-link-text">CLICK ME</p>
          </div>
        </Link>
      </section>
      </Route>
      <Route path="/video" component={ Video }/>
    </div>
  );
}

export default App;
