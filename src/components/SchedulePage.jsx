// SchedulePage.js
import React from 'react';

// Sample data for the schedule
const scheduleData = [
  {
    day: 'Day 1 (03.12.2024)',
    events: [
      { time: '9:00 AM – 11:00 AM', title: 'Registration' },
      { time: '11:15 AM – 12:15 PM', title: 'Inaugural session' },
      { time: '12:30 PM – 1:30 PM', title: 'Keynote addresses' },
      { time: '1:30 PM – 2:15 PM' , title: 'Lunch' },
      { time: '2:30 PM – 3:30 PM', title: 'A transition from PID to Sliding Mode Control - Dr. Shyam Kamal (IIT (BHU) Varanasi)' },
      { time: '3:30 PM– 4:30 PM', title: ' Cyber Physical Systems Dr. Rajeeb Dey (NIT Silchar)' },
      { time: '4:30 PM– 5:30 PM', title: 'ElectroMobility @ dSPACE - Mr. Rakesh Pachisia (dSPACE)' }
    ]
  },
  {
    day: 'Day 2 (04.12.2024)',
    events: [
      { time: '11:00 AM – 11:45 AM', title: ' Control strategies for robotics: trends and open research areas Dr. Anirban Nag (IIEST Shibpur)' },
      { time: '11:50 AM– 12:35 PM', title: ' Human Robot Collaboration: Mastering Interactions Dr. Bhabani Shankar Dey (IISc Bangalore)' },
      { time: '12:40 PM– 01:25 PM', title: 'Next generation High throughput satellite - Dr. Deepak Mishra (ISRO)'},
      { time: '1:30 PM– 2:15 PM', title: 'Lunch' },
      { time: '2:30 PM– 3:30 PM', title: 'Control and Dynamics in Microscale - Dr. Abhilash Patel (IIT Kanpur)' },
      { time: '3:30 PM– 4:30 PM', title: 'Seeds of Innovation: How a College Project Grew into Agastya Invention - Mr. Prantik Sinha' },
      { time: '4:30 PM– 5:30 PM', title: 'Developing AI Solutions for India\'s Unique Challenges - Mr. Sandip Boral' }
    ]
  },
  {
    day: 'Day 3 (05.12.2024)',
    events: [
      { time: '10:00 AM– 11:00 AM', title: 'Maximizing quadrotor flight: Tuning for energy-optimal performance - Dr. Chayan Bhawal (IIT Guwahati)' },
      { time: '11:00 AM– 1:30 PM', title: 'Design and simulation of Electrical engineering systems (Electric Vehicle application) Mathworks (Demonstration) - Mr. Shubhra Jyoti Moitra (Elmax)' },
      { time: '1:30 PM– 2:15 PM', title: 'Lunch' },
      { time: '2:30 PM– 3:30 PM', title: 'Applied Control Systems in Automotive Engineering - Dr. Jagannath Samantaray (Mathworks)' },
      { time: '3:30 PM– 5:00 PM', title: 'Bridging Academic Excellence and Industry Readiness: Insights from E-Mobility, Autonomous Solutions, and Robotics - Mr. T R Balaji (EduTech)' }
    ]
  },
  {
    day: 'Day 4 (06.12.2024)',
    events: [
      { time: '9:30 AM– 10:30 AM', title: 'Problems at the intersection of control theory and algebraic graph theory - Dr. Dwaipayan Mukherjee (IIT Bombay)' },
      { time: '10:30 AM– 1:30 PM', title: 'Introduction to PSCAD EMT simulation and recent trends in power system simulation - Mr. Sagar Indalkar (PSCAD)' },
      { time: '1:30 PM– 2:15 PM', title: 'Lunch' },
      { time: '2:30 PM– 4:00 PM', title: 'COBOTS: The Future of Smart Automation - Dr. Arun Dayal Udai (IIT (ISM) Dhanbad)' },
      { time: '4:00 PM– 5:00 PM', title: 'Continuous-time periodic controllers - Dr. Ankit Ravindra Deshmukh (IIT Bhubaneshwar)' },
      { time: '5:00 PM– 6:00 PM', title: 'Integrated Motor Control Unit and Vehicle Control Unit for Low-Speed Electric Vehicles - Dr. Dipankar Debnath (IIT Kgp)' }
    ]
  },
  {
    day: 'Day 5 (07.12.2024)',
    events: [
      { time: '10:30 AM – 11:30 AM', title: 'A tale of Matrix Commutators and Stability of Switched Systems - Dr. Atreyee Kundu (IIT Kgp)' },
      { time: '11:30 AM– 12:30 PM', title: 'New Challenges in RE Integration and Solutions - Mr. Chandan Kumar (POSOCO)' },
      { time: '12:30 PM– 1:30 PM', title: 'Control of Quadrotor: Theory to Practice - Prof. Shubhendu Bhasin (IIT Delhi)' },
      { time: '1:30 PM– 2:15 PM', title: 'Lunch' },
      { time: '2:30 PM– 4:00 PM', title: 'Panel Discussion on Engineering the Future: A Joint Vision for Academia and Industry' },
      { time: '4:00 PM– 4:30 PM', title: 'Valedictory' }
    ]
  }
];

const SchedulePage = () => {
  return (
    <div className="schedule-container">
      {scheduleData.map((day, index) => (
        <div key={index} className="day-schedule">
          <h2>{day.day}</h2>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              {day.events.map((event, idx) => (
                <tr key={idx}>
                  <td>{event.time}</td>
                  <td>{event.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default SchedulePage;
