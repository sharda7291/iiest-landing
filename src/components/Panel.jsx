import React from "react";
import sp1 from '../assets/img/logos/panelist/sp1.png'
import sp2 from '../assets/img/logos/panelist/sp2.png'
import sp3 from '../assets/img/logos/panelist/sp3.png'
import sp4 from '../assets/img/logos/panelist/sp4.png'
import sp5 from '../assets/img/logos/panelist/sp5.png'
import sp6 from '../assets/img/logos/panelist/sp6.png'


const panelData = [
  {
    id: 1,
    name: "Mr. Abhijit Maitra",
    title: "Director at Armatrics Applications",
    image: sp1,
  },
  {
    id: 2,
    name: "Mr. Sanjay Kar Chowdhury",
    title: "Dy. General Manager(HR), CESC",
    image: sp2,
  },
  {
    id: 3,
    name: "Dr. Mita Tarafder",
    title: "Former Chief Scientist, CSIR- NML, Jamshedpur",
    image: sp5
  },
  {
    id: 4,
    name: "Prof. Pratik Dutta",
    title: "Dean R&C, IIEST Shibpur",
    image: sp3
  },
  {
    id: 5,
    name: "Prof. Shubhendu Bhasin",
    title: "Professor, Electrical Engineering, IIT Delhi",
    image: sp4
  },
  {
    id: 6,
    name: "Dr. Suvarun Dalapati",
    title: "Assistant Professor, Electrical Engineering, IIEST Shibpur",
    image: sp6
  },
];

const Panel = () => {
  return (
    <div className="panel-container">
      {panelData.map((person) => (
        <div key={person.id} className="panel-card">
          <img
            src={person.image}
            alt={person.name}
            className="panel-image"
          />
          <h3 className="panel-name">{person.name}</h3>
          <p className="panel-title">{person.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Panel;
