import './App.css';
import Video from './Video/Video';
import { Link, Route } from 'react-router-dom';

const App = ()  => {
  return (
    <div className="App">
    <Route exact path="/">
    <section className="btn-container">
      <header>
        <h1 className="title">HAPPY BIRTHDAY MOM</h1>
      </header>
      <Link to="/video" className="video-link">
        <div className="video-link-background">
          <div className="video-link-background-hover">
            <p className="video-link-text">CLICK ME</p>
          </div>
        </div>
      </Link>
      </section>
      </Route>
      <Route path="/video" component={ Video }/>
    </div>
  );
}

export default App;
