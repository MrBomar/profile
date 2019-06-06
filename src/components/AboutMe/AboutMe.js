import React from 'react';
import './AboutMe.css';
import Footer from '../Footer/Footer';

const AboutMe = (props) => {
    return (
        <main id="aboutMe" onClick={props.closeNavMenu}>
            <h1 id="aboutMeHeader">ABOUT ME</h1>
                <div>
                    <p>Over the last year I have spent my free time learning how to develop web applications using technologies like React, AXAJ, and SQL, but my experience in application development and programming didn't start there. Professionally, I have developed several Access solutions while employed by XPO Logistics and Valspar Coating. These applications involved technologies like Visual Basic, HTML, and SQL and were essential in facilitating production, materials management, employee performance, and reducing redundancy and paperwork.</p>
                    <p>My interest in programming started when my parents bought their first computer, a Compaq Presario. I was 13 then and at $1,600, they definitely didn't buy it for me. But, once they saw me checking out library books on computer programming, BASIC, and HTML, they decided right then and there that.....I wasn't permitted to use their computer.</p>
                    <p>Thus, seeing my opportunity dissapear before my eyes, I headed to Wal-Mart to place my very own computer on layaway. I considered myself a lucky kid. My grandfather was a painting contractor and I was home schooled, so as long as I got my schooling done I could work for him. Six months and $700 later I was the proud owner of a refurbished Packard Bell with a whopping 66Mhz Intel 486, 4mb RAM, and 320mb hard drive.</p>
                    <p>
                        My uncle was an amateur Fortran programmer and hacker. He gave me my first two programming books. An "Internet for Dummies" and a "Microsoft QuickBasic", complete with my own compiling version of the QuickBasic editor. I created several text based applications, a couple simple games, and a NES ROM website. From there I moved to Visual C++ and started to experiment with Windows applications.
                    </p>
                    <p>
                        Well, that was 20 years ago. Today I am a dispatcher and simply not satisfied. I like to build and create. I love to solve problems. So, less than two years ago I decided it was time to pickup again the only hobby I really enjoyed, programming!
                    </p>
                    <p>Not knowing where to get started I enrolled at WGU and since I had already done so much with Access I decided that I would get started developing Windows application using Visual Basic. It wasn't long before I realized that the real growth in the industry was web applications and hand-held devices, and that I didn't need to wait till I had the degree. So, if I wanted to get started before finishing my degree, that I had to make another change.
                    </p>
                    <p> 
                        This website is the result. It contains my current projects that I have developed since switching to Javascript and React. These are still a work in progress, but it's a reflection of where I am today.</p>
                    <p>Please browse the projects, play the games, and let me know what you think.
                    </p>
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