import React from 'react';
import './Participants.css';

export default function Participants(props) {
  //console.log('Participants props: ', props);

  return (
    <div className="participant">
      <div className="imageContainer">
        <img src={props.imgURL} alt={props.name + ' avatar'} />
      </div>
      <div className="userInfo">
        <p className="userName">{props.name}</p>
        <div className="stageInfo">
          <div className={props.inSession ? 'greenCircle' : 'greyCircle'}></div>
          {props.inSession && props.onStage ? (
            <p>
              on stage · <span className="boot">Boot</span>
            </p>
          ) : !props.inSession ? (
            <p>left session</p>
          ) : (
            <p>in session</p>
          )}
        </div>
      </div>
    </div>
  );
}
