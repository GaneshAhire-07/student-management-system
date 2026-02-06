import React from 'react'

function Footer() {
  return (
    <div className='bg-dark text-light text-center '>
        <div className='parent d-flex justify-content-evenly' >
            <div className='w-25 p-2'>
                <h4 className='text-warning'>Irise</h4>
                Empowering Your Career With Expert-Led Training, Practical Experience,
                <br></br> And Personalized Support. Join Us To Achieve Your Professional Goals And Succeed.
            </div>
            <div className='w-25 p-2'>
                <h4 className='text-warning'>OUR Courses</h4>
                
                    Java Full Stack Development<br></br>
                    Practical Digital Marketing & SEO<br></br>
                    Python & React JS Training<br></br>
                    SpringBoot Training<br></br>
                    SAP, Data Science<br></br>
                    Software Testing<br></br>
            </div>
            <div className='w-25 p-2'>
                <h4 className='text-warning'>Contact Us</h4>
                
                    Office No 301, 3rd Floor, Krishnai Plaza, 
                    above Dominos Pizza, Karve Nagar, Pune, 
                    Maharashtra 411052
                    7499848119
                    9403319401
                    info@irisesoft.in
                
            </div>
        </div>
        <hr/>
        <div >
            Copyright © 2025 I-Rise Software Training Institute
        </div>
    </div>
  )
}

export default Footer