import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Container from './game/container'
import './index.css'
function App() {
  return (
    <Container />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
