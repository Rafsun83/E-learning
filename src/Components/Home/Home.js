import React from 'react';
import Blog from '../Blogs/Blog';
import Explorecours from '../Explorecourse/Explorecours';
import Footers from '../Footer/Footers';
import Futurelearning from '../Futurelearnings/Futurelearning';
import HeaderTop from '../HeaderTop/HeaderTop';
import Instructor from '../Instructors/Instructor';
import Aboutcourse from './../Aboutcourses/Aboutcourse';
import Categori from './../Categories/Categori';
import Choose from './../Chooseus/Choose';
import Information from './../Informations/Information';
import Suitable from './../Suitables/Suitable';
import Happystudent from './../Happystudents/Happystudent';
import Keysupport from './../Keysupport/Keysupport';



const Home = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <Futurelearning></Futurelearning>
            <Aboutcourse></Aboutcourse>
            <Categori></Categori>
            <Explorecours></Explorecours>
            <Choose></Choose>
            <Information></Information>
            <Instructor></Instructor>
            <Suitable></Suitable>
            <Happystudent></Happystudent>
            <Blog></Blog>
            <Keysupport></Keysupport>
            <Footers></Footers>

        </div>
    );
};

export default Home;