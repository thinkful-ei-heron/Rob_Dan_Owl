import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import participantStore from './participantsStore';
import chatEvents from './chatEvents';
import 'normalize.css';

ReactDOM.render(
  <App participants={participantStore} chatEvents={chatEvents} />,
  document.getElementById('root')
);
