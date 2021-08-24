import React from 'react';
import './AboutMe.css';
import Footer from '../Footer/Footer';

const AboutMe = (props) => {
    return (
        <main id="aboutMe" onClick={props.closeNavMenu}>
            <h1 id="aboutMeHeader">ABOUT ME</h1>
                <div>
                    <p>Welcome to my personal profile! I am an aspiring full stack developer specializing in Web Applications. Currently, I am enrolled at WGU for my BS in Application Development. As of 2021 I am 3 years into my program and looking forward to graduating soon. For a list of courses completed, certifications earned, and any additional education efforts visit my education page.</p>
                    <p>During my enrollment I have been working on coding projects as time allows. Most of my projects have been coded using Javascript, CSS, HTML, PHP, and React.js. Check them out on my projects page.</p>
                    <p>Prior to my enrollment at WGU I had build MS Access applications for Valspar and Jacobson Transportation. These solutions utilized MySQL for the backend data storage and Access applications for front end users. The front end was distributed to users in compiled format and utilized a custom log-in system tied to the users Windows ID. I used an extensive amount of VBA and SQL in creating these applications in order to customze their function, appearance, and performance. It was this experience that pushed me toward making application development my full-time career.</p>
                    <p>Valspar's applications included a set of tools for automating the raw material and MRO reordering processes, storage and managment of Material Safety Data Sheets, materials staging management, and multiple reporting tools. These tools were used by multiple departments including, manufacturing, purchasing, quality control, shipping, and staging. </p>
                    <p>For Jacobson Transportation I developmed a set of tools to track and anyalyse driver performance and DOT compliance utilizing driver e-logs, customer order data, and Google maps. Additionally, I created a barcode solution for shipping. These solutions were used by the transportation and shipping department.</p>

                    <p>Have a look around, if you would like to contact me concerning a development opportunity or if you have a comment about the site email me.</p>

                    <p></p>
                    <h3 id='closing'>
                        Thank You,
                    </h3>
                    <h2 id='mySignature'>
                        Leslie C. Bomar III
                    </h2>
                </div>
            <Footer />
        </main>
    )
}

export default AboutMe;