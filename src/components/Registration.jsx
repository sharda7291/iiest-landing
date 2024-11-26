import React from 'react'
import { Link } from 'react-router-dom'
import Qr from '../assets/img/logos/QR.png'

function Registration() {
  return (
    <>
    <p>The registration fees (incl. of GST) payable, per delegate, are:</p>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Category</th>
          <th>Fees (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Faculty/ Scientists/ Equivalent</td>
          <td>1500/-</td>
        </tr>
        <tr>
          <td>Research Scholars</td>
          <td>1180/-</td>
        </tr>
        <tr>
          <td>Students of other institutes</td>
          <td>600/-</td>
        </tr>
        <tr>
          <td>Students of IIEST</td>
          <td>300/-</td>
        </tr>
      </tbody>
    </table>
    <p>The Registration Fee will cover the <strong>Symposium-kit, Participation Certificate, Tea/coffee, and Lunch</strong> on all the days.</p>
   <h5> <strong>Mode of Payment:</strong> </h5>
<p><strong>1. By bank transfer/ NEFT as per following details:</strong><br></br>
<strong>A/c Name	: CONTINUING EDUCATION CENTRE BESUS</strong> <br></br>
       A/c No.	: <strong>1532010011963</strong><br></br>
       Bank		: <strong>PUNJAB NATIONAL BANK</strong><br></br>
       Branch 	: BESUS BRANCH<br></br>
       IFSC Code	: <strong>PUNB0153220 (Fifth character is zero)</strong><br></br>
</p>
<h5>2. By scanning the QR code</h5>
<img src={Qr} alt='' className='qr' />
<p>After making the payment, please fill the Google form <Link to="https://forms.gle/BhSidnHjGHAf6qyC7">https://forms.gle/BhSidnHjGHAf6qyC7</Link>

<br/>In case of difficulties or queries, contact mousumi@ee.iiests.ac.in or anirudh@ee.iiests.ac.in
</p>
  </>
  )
}

export default Registration