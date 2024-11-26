import React from 'react'
import img1 from '../assets/img/activites/1.png'
import img2 from '../assets/img/activites/2.png'
import img3 from '../assets/img/activites/3.png'
import img4 from '../assets/img/activites/4.png'
import img5 from '../assets/img/activites/5.png'
import img6 from '../assets/img/activites/6.png'

function StudentActivity() {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        
    ];
  return (
    <>
        <div className="gallery-container">
            {images.map((image, index) => (
                <div className="gallery-item" key={index}>
                    <img src={image} alt={`Gallery Item ${index}`} />
                </div>
            ))}
        </div>
    </>
  )
}

export default StudentActivity