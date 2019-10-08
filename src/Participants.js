import React from 'react';
import './Participants.css';

export default function Participants(props) {
  console.log('Participants props: ', props);
  if (props.inSession) {
    return (
      <div className="participant">
        <div className="imageContainer">
          <img src={props.imgURL} alt={props.name + ' avatar'} />
        </div>
        <div className="userInfo">
          <p className="userName">{props.name}</p>
          <div className="stageInfo">
            <div className="greenCircle"></div>
            <p>
              on stage · <span className="boot">Boot</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  return '';
}
