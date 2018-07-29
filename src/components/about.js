import React from 'react';

import about from '../assets/images/about/creative.png';
import hobby from '../assets/images/about/hobby.png';
import udemylogo from '../assets/images/about/Udemy_logo.png';
import MetropoliaLogo from '../assets/images/about/MetropoliaLogo.png';
import chainlinklogo from '../assets/images/about/chainlink-logo-web.png';


export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>Who Am I?</h3>
            <hr className='white-color'/>
            <p className='text-faded'>Growing up building electronics, I've always had a passion for building and creating things. So Im graduating soon with a bachelor's in software engineering from Metropolia AMK, to accomplish my dream. Next, it was several online courses in web application development where I got to take concepts and turn them into products. Now I want to take my passion, education, and experience to develop web applications and still continue learning more.</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded center-align"><em>"Where there's a will, there's a way."</em></div>
            <p className='text-faded'>My approach to software and application development is to balance form and function. I think a design should be intuitive, visually balanced, and it allows the content to shine. Designs that create a great user experience are significant because they cause people to buy products from the same company over and over again. Additionally, implementing designs with code efficiency in mind will enhance performance, scalability, and overall product quality. With this approach, there is no limit on what can be achieved.</p>
            
            <h4 className='white-color'>Background</h4>
            <hr className='white-color sub'/>
            <div className="row">
            <div className="col s12 m4">
                <img src={udemylogo} alt="Udemy" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Completing Udemy's <em>various courses in Web Development artifacts like JavaScript, React and Nodejs with MongoDB </em>has laid the foundation for my <strong>software development</strong> career. I'm still enrolling more courses to enhance my programming skills.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={chainlinklogo} alt="chainlinklogo" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                2+ years experience as a <strong>Construction Project Engineer </strong>at <em>ChainLink Engineering</em> has molded me into an engineer that can take a concept and develop it into a high volume product. This experience also gave me insights in organizational management systems and teamworking skills.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={MetropoliaLogo} alt="Cal Poly" className='bgImg responsive-img'/>
            <br/>
            <div className="background-text text-faded">
                Almost completing my bachelor's degree in <strong>Software Engineering</strong> at Metropolia AMK. It's<em>Learn by Doing</em> approach is how I acquired my logical and analytical skills. I'm feeling lucky that i had chosen this particular institution to pursue my career out of many options.
            </div>
        </div>
            </div>
            <h4 className='white-color'>Hobbies</h4>
            <hr className='white-color sub'/>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={hobby} alt="hobbies"/>
            </div>
            <div className="text-faded center-align"><em>"Whatever you like to do, make it a hobby and whatever the world likes to do, make it a business. ~Warren Buffet"</em></div>
            
        </div>
        </section>
    );
}