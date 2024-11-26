import React from 'react';
import committeeData from './committeeData';

function Committee() {
  return (
    <div className="committee-container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Committee</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Chief Patron</th>
            <td>
              {committeeData.chiefPatron.name} <br />
              ({committeeData.chiefPatron.designation})
            </td>
          </tr>
          <tr>
            <th>Technical Committee</th>
            <td>
              {committeeData.technicalCommittee.name} <br />
              ({committeeData.technicalCommittee.designation})
            </td>
          </tr>
          <tr>
            <th>Patrons</th>
            <td>
              {committeeData.patrons.map((patron, index) => (
                <React.Fragment key={index}>
                  {patron.name} <br />
                  ({patron.designation}) <br />
                </React.Fragment>
              ))}
            </td>
          </tr>
          <tr>
            <th>Finance Committee</th>
            <td>
              {committeeData.financeCommittee.map((member, index) => (
                <React.Fragment key={index}>
                  {member.name} <br />
                  ({member.designation}) <br />
                </React.Fragment>
              ))}
            </td>
          </tr>
          <tr>
            <th>Registration Committee</th>
            <td>
              {committeeData.registrationCommittee.map((member, index) => (
                <React.Fragment key={index}>
                  {member.name} <br />
                  ({member.designation}) <br />
                </React.Fragment>
              ))}
            </td>
          </tr>
          <tr>
            <th>Program Chair</th>
            <td>
              {committeeData.programChair.map((chair, index) => (
                <React.Fragment key={index}>
                  {chair.name} <br />
                  ({chair.designation}) <br />
                </React.Fragment>
              ))}
            </td>
          </tr>
          <tr>
            <th>Conveners</th>
            <td>
              {committeeData.conveners.map((convener, index) => (
                <React.Fragment key={index}>
                  {convener.name} <br />
                  ({convener.designation}) <br />
                </React.Fragment>
              ))}
            </td>
          </tr>
          <tr>
            <th>Publicity Chair</th>
            <td>
              {committeeData.publicityChair.map((chair, index) => (
                <React.Fragment key={index}>
                  {chair.name} <br />
                  ({chair.designation}) <br />
                </React.Fragment>
              ))}
            </td>
          </tr>
          <tr>
            <th>Advisory Committee</th>
            <td>
              {committeeData.advisoryCommittee.map((advisor, index) => (
                <React.Fragment key={index}>
                  {advisor.name} <br />
                  ({advisor.designation}) <br />
                </React.Fragment>
              ))}
            </td>
          </tr>
          <tr>
            <th>Logistics Committee</th>
            <td>
              {committeeData.logisticsCommittee.map((logistic, index) => (
                <React.Fragment key={index}>
                  {logistic.name} <br />
                  ({logistic.designation}) <br />
                </React.Fragment>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Committee;
