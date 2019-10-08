import React from 'react';
import Participants from './Participants';
import Chat from './Chat';
import Stage from './Stage';

function App(props) {
  console.log(props);
  return (
    <main className="App">
      {props.participants.map(user => {
        return <Participants imgURL={user.avatar} name={user.name} inSession={user.inSession} />;
      })}
    </main>
  );
}

export default App;
