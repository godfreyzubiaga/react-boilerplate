import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div>Howdy traveller!</div>;
const mountPoint = () => document.getElementById('root');

ReactDOM.render(<App />, mountPoint());
