import React from 'react';
import ChatEvent from './ChatEvent';

export default function Chat(props) {
  console.log(props);
  return (
    <section className="chatWindow">
      {props.chatEvents.map(event => {
        return (
          <ChatEvent
            user={props.users[event.participantId - 1].name}
            userAvatar={props.users[event.participantId - 1].avatar}
            time={new Date(event.timestamp)}
            type={event.type}
            _time={event.time}
            timestamp={event.timestamp}
            message={event.message}
          />
        );
      })}
    </section>
  );
}
