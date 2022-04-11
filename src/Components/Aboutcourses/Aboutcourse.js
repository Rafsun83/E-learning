import React from 'react';
import { Button } from 'react-bootstrap';
import read from '../../Images/read.png'
import '../Aboutcourses/Aboutcourse.css'

const Aboutcourse = () => {
    return (
        <div>
            <div className='aboutcoursesection'>
                <div className='container Aboutcoursepart'>
                    <div className='reading'>
                        <img src={read} alt="" />
                    </div>
                    <div className='Aboutcourseline'>
                        <small>learn New and Popular Course</small>
                        <h1>For Every Students, <br /> Every<span style={{ color: 'red' }}> Classroom</span></h1>
                        <small>Dramatically supply transparent deliveravles before backward <br /> camp internal or "organic" sources. Competently leverage othet</small> <br />
                        <Button className='buttonexpo' >Explore Course</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Aboutcourse;