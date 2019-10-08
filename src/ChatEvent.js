import React from 'react';

export default function ChatEvent(props) {
  const eventMsg = (userName, type) => {
    const typeMsg = {
      'thumbs-up': (
        <p>
          <span>{userName}</span> gave a thumbs up
        </p>
      ),
      'thumbs-down': (
        <p>
          <span>{userName}</span> gave a thumbs down
        </p>
      ),
      'raise-hand': (
        <p>
          <span>{userName}</span> raised their handp
        </p>
      ),
      clap: (
        <p>
          <span>{userName}</span> clapped
        </p>
      ),
      join: (
        <p>
          <span>{userName}</span> joined
        </p>
      ),
      'join-stage': (
        <p>
          <span>{userName}</span> joined the stage
        </p>
      ),
      leave: (
        <p>
          <span>{userName}</span> left
        </p>
      ),
      'leave-stage': (
        <p>
          <span>{userName}</span> left the stage
        </p>
      )
    };

    return typeMsg[type];
  };

  console.log(props);
  let jsx = <p>Looks like there was an error</p>;
  if (props.type === 'message') {
    jsx = (
      <div className="chatEvent">
        <img src={props.userAvatar} alt={props.user + ' avatar'} />
        <p className="userAndTime">
          <span>{props.user}</span> {`${props.time}`}
        </p>
        <p className="message">{props.message}</p>
      </div>
    );
  } else {
    jsx = <div className="chatEvent">{eventMsg(props.user, props.type)}</div>;
  }
  return jsx;
}
