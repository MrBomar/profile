import React from 'react';
import './AboutMe.css';
import LinkButton from './components/LinkButton';

const AboutMe = props => {
    return (
        <div id="aboutMe">
            <h1 id="aboutMeHeader">ABOUT ME</h1>
            <div className="columns2">
                <div className="col1">
                    <p>Im a programming hobbyist trying to get his first job in application development. I have spent the last year learning how to develop web applications using technologies like React, AXAJ, and SQL, but my experience in application development and programming in general is much more extensive. Professionally I have developed several Access solutions while employed by XPO Logistics and Valspar Coating. These applications involved a heavy dose of Visual Basic, HTML, and SQL and were essential in facilitating production, materials management, employee performance, and reducing redundancy and paperwork.</p>
                    <p>My interest in programming started when my parents bought their first computer, a Compaq Presario. I was only 13 and at $1,600, they definitely didn't buy it for me. But, once they saw me checking out library books on computer programming, BASIC, and HTML, they decided right then and there that.....I wasn't permitted to use their computer. Thus I latched on to a Wal-Mart layaway plan to purchase my very own computer. I was a lucky kid. My papaw was a painting contractor and I was home schooled, so as long as I got my schooling done I could work for him. Six months and $700 later I was the proud owner of a refurbished Packard Bell with a whopping 66Mhz Intel 486, 4mb RAM, and 320mb hard drive.</p>
                    <p>
                        My uncle was an amateur Fortran programmer and hacker. It was he that gave me my first two programming books. An Internet for Dummies and a Microsoft QuickBasic, complete with a compiling version of QuickBasic. I created several text based applications, a couple simple games, and a NES ROM website. From there I moved to Visual C++ and started to experiment with Windows applications.
                    </p>
                    <p>
                        Well, that was 20 years ago. Today I am a dispatcher for simply not satisfied. So, less than two years ago I decided it was time to pursue the only hobby I ever enjoyed, programming. Since I had already done so much with Access I decided that I would get started developing Windows application using Visual Basic. It wasn't long before I realized that the real growth in the industry was web applications and hand-held devices. So, if I wanted to get started before finishing my degree, that I had to make another change.
                    </p>
                    <p> 
                        This website is the result. It contains my current projects that I have developed since switching to Javascript and React. Please browse the projects, play the games, and let me know what you think.
                    </p>
                    <h3 className="mySignature">
                        Thank You.
                    </h3>
                </div>
                <div className="col2">
                    <h2>Coding Highlights</h2>
                    <table>
                        <tr>
                            <td class="bullet">&bull;</td>
                            <td>Designed and implemented a driver performance monitoring and reporting system that helped to identify unnecessary stops, extended breaks, and deviations from route planning. No tool for assessing route efficiency was in place before this tool, saw a 12% reduction in paid overtime.</td>
                        </tr>
                        <tr>
                            <td class="bullet">&bull;</td>
                            <td>Designed and implemented a route status reporting tool that incorporated automated HTML email reports.</td>
                        </tr>
                        <tr>
                            <td class="bullet">&bull;</td>
                            <td>Designed a bar-code solution currently used to track and build customer shipments.</td>
                        </tr>
                        <tr>
                            <td class="bullet">&bull;</td>
                            <td>Devised a route planning tool that combined historical delivery data with Google Maps routing to provide accurate routing estimates.</td>
                        </tr>
                        <tr>
                            <td class="bullet">&bull;</td>
                            <td>Implemented an Access client upgrade tool. Provided automated alerts to client users and automated the upgrade process for the users client application.</td>
                        </tr>
                        <tr>
                            <td class="bullet">&bull;</td>
                            <td>Designed and implemented a raw material discrepancy tracking system that reduced shortages by 80%.</td>
                        </tr>
                        <tr>
                            <td class="bullet">&bull;</td>
                            <td>Designed and implemented a raw material reordering system that reduced time spent assessing plant needs by 90%, and helped to reduce on-hand inventories by 20%.</td>
                        </tr>
                        <tr>
                            <td class="bullet">&bull;</td>
                            <td>Designed and implemented a raw material staging process that provided status updates, manged staging processed, and printed labels.</td>
                        </tr>
                        <tr>
                            <td class="bullet">&bull;</td>
                            <td>Designed and implemented a site wide MRO ordering and approval system used for office, maintenance, safety and production materials. Was instrumental in collecting data concerning buying habits and reducing waste.</td>
                        </tr>
                    </table>
                </div>
            </div>
            <LinkButton 
                link="https://github.com/MrBomar" 
                image="/images/github-icon.png" 
                alt="github icon"
                message="Visit my Github"
            />
            <LinkButton
                link="https://linkedin.com"
                image="/images/linkedin-icon.png"
                alt="linked in icon"
                message="Visit my LinkedIn"
            />
            <LinkButton
                link="https://stackoverflow.com"
                image="/images/stackoverflow-icon.png"
                alt="stack overflow icon"
                message="Visit my Stack Overflow"
            />
            <LinkButton
                link="mailto:mrlesbomar@gmail.com"
                image="/images/gmail-icon.png"
                alt="gmail icon"
                message="Contact Me"
            />
        </div>
    )
}

export default AboutMe;