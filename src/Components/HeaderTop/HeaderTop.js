import React from 'react';
import { Button } from 'react-bootstrap';
import read from '../../Images/read.png'
import '../HeaderTop/HeaderTop.css'
import Navigation from '../Navigations/Navigation';

const HeaderTop = () => {
    return (
        <div className='headertopsection'>

            <div className='headertop' id='home'>

                <div className='container Headertoppart'>
                    <div className='headertopline'>
                        <small>learn New and Popular Course</small>
                        <h1>For Every Students, <br /> Every<span style={{ color: 'rgb(255,103,82)' }}> Classroom</span></h1>
                        <small>Dramatically supply transparent deliveravles before backward <br /> camp internal or "organic" sources. Competently leverage othet</small> <br />
                        <Button className='buttonexpo' >Explore Course</Button>
                    </div>
                    <div className='reading'>
                        <img src={read} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;