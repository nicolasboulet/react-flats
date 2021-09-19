import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
