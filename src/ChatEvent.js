import React from 'react';

export default function ChatEvent(props) {
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
  } else if (props.type === 'thumbs-up') {
    jsx = (
      <div className="chatEvent">
        <p className="userAction">
          <span>{props.user}</span> gave a thumbs up
        </p>
      </div>
    );
  } else if (props.type === 'thumbs-down') {
    jsx = (
      <div className="chatEvent">
        <p className="userAction">
          <span>{props.user}</span> gave a thumbs down
        </p>
      </div>
    );
  } else if (props.type === 'raise-hand') {
    jsx = (
      <div className="chatEvent">
        <p className="userAction">
          <span>{props.user}</span> raised their hand
        </p>
      </div>
    );
  } else if (props.type === 'clap') {
    jsx = (
      <div className="chatEvent">
        <p className="userAction">
          <span>{props.user}</span> clapped
        </p>
      </div>
    );
  } else if (props.type === 'join') {
    jsx = (
      <div className="chatEvent">
        <p className="userAction">
          <span>{props.user}</span> joined
        </p>
      </div>
    );
  } else if (props.type === 'join-stage') {
    jsx = (
      <div className="chatEvent">
        <p className="userAction">
          <span>{props.user}</span> joined the stage
        </p>
      </div>
    );
  } else if (props.type === 'leave') {
    jsx = (
      <div className="chatEvent">
        <p className="userAction">
          <span>{props.user}</span> left
        </p>
      </div>
    );
  } else if (props.type === 'leave-stage') {
    jsx = (
      <div className="chatEvent">
        <p className="userAction">
          <span>{props.user}</span> left the stage
        </p>
      </div>
    );
  }
  return jsx;
}
