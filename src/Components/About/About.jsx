import React from 'react'
import Star from '../Star/Star'

function About() {
    return <>
        <div className="about text-white d-flex justify-content-center align-items-center">
            <div>          
            <div className="text-center pt-4">
            <h2 class="text-uppercase mb-3 fs-1 fw-bolder">about component</h2>
                <Star></Star>
            </div>
            <div className="container">
                <div className="row px-5">
                    <div className="col-md-6 ps-md-5">
                        <p className='fs-3'>
                            Freelancer is a free bootstrap theme created by Route. 
                            The download includes the complete source files including HTML, CSS, and JavaScript as well
                             as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="col-md-6 pe-5">
                        <p className='fs-3'>
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. 
                        </p>
                    </div>
                </div>
            </div>
            </div>
       
        </div>
        

    </>
}

export default About
