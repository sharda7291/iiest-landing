import React from "react";

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="speaker-card horizontal">
      <div className="card-image">
        <img src={speaker.image} alt={speaker.name} className="speaker-image" />
      </div>
      <div className="card-content">
        <h4>{speaker.name}</h4>
        <h5>{speaker.designation}</h5>
        <h5>{speaker.title}</h5>
        <p>{speaker.description}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
