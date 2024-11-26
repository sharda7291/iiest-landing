import React from 'react'
import SpeakerCard from "./SpeakerCard";
import speakers from "./SpeakerData";

function Speakers() {
  return (
   

    <div className="App">
      <div className="card-container">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </div>


  )
}

export default Speakers