import React, {Component} from 'react';
import Footer from '../Footer/Footer';
import './Education.css';

export default class Education extends Component {
    
    render() {
        return (
            <div id='education'>
                <h1>Formal Education</h1>
                <h2>Western Governors University</h2>
                <div>
                    <img alt='WGU Academic Logo' src='/images/WGU_Academic_Logo.png' height='200px' width='200px'/>
                    <h3>Bachelor of Science, Software Development | Currently Enrolled</h3>
                    <p>Starting February of 2018 I have been enrolled full time and have completed 86 of 125 credits. WGU utilized a pass/fail grading system but requires a minimum 3.0 out of 4.0 to pass. Below is a list of courses completed as of 08/24/2021.</p>
                    <div class='flexTable col2'>
                        <div class='flexTableCell'>Survey of United States Constitution and Government</div>
                        <div class='flexTableCell'>Critical Thinking and Logic</div>
                        <div class='flexTableCell'>Introduction to IT</div>
                        <div class='flexTableCell'>Introduction to Communication</div>
                        <div class='flexTableCell'>Network and Security - Foundations</div>
                        <div class='flexTableCell'>Introduction to Humanities</div>
                        <div class='flexTableCell'>Web Development Foundations</div>
                        <div class='flexTableCell'>Integrated Physical Sciences</div>
                        <div class='flexTableCell'>IT Foundations</div>
                        <div class='flexTableCell'>IT Applications</div>
                        <div class='flexTableCell'>Introduction to Geography</div>
                        <div class='flexTableCell'>Natural Science Lab</div>
                        <div class='flexTableCell'>College Algebra</div>
                        <div class='flexTableCell'>Business of IT - Project Management</div>
                        <div class='flexTableCell'>Scripting and Programming - Applications</div>
                        <div class='flexTableCell'>Introduction to Probability and Statistics</div>
                        <div class='flexTableCell'>Technical Communications</div>
                        <div class='flexTableCell'>Web Development Applications</div>
                        <div class='flexTableCell'>Data Management - Foundations</div>
                        <div class='flexTableCell'>Data Management - Applications</div>
                        <div class='flexTableCell'>Organizational Behaviour and Leadership</div>
                        <div class='flexTableCell'>Business of IT - Applications</div>
                        <div class='flexTableCell'>User Interface Design</div>
                    </div>
                </div>
                <h1>Certifications</h1>
                <h2>CompTIA</h2>
                <div>
                    <a href='https://www.youracclaim.com/badges/1fa7afbc-ce11-4fca-b83b-f7371b398c0c/public_url' rel='noopener noreferrer' target='_blank'>
                        <img src='/images/CompTIA_Project_204x204.png' height='200' width='200' alt='CompTIA Project+ Badge'/>
                    </a>
                    <h3>Project + | Completed 01/08/2020</h3>
                    <h4>Description:</h4>
                    <p>The CompTIA Project+ examination is designed for business professionals who coordinate or manage small-to-medium-sized projects. The successful candidate will have the knowledge and skills required to manage the project life cycle, ensure appropriate communication, manage resources and stakeholders, and to maintain project documentation</p>
                </div>
                <div>
                    <a href='https://www.youracclaim.com/badges/9ab39f2c-fd80-4de7-a280-a4ebe2fe0f1b/public_url' rel='noopener noreferrer' target='_blank'>
                        <img src='/images/CompTIA_A_108x108.png' height='200' width='200' alt='CompTIA A+ Badge'/>
                    </a>
                    <h3>A+ | Completed 05/28/2019</h3>
                    <h4>Description:</h4>
                    <p>The CompTIA A+ certification requires practitioner to demonstrate the following:</p>
                    <div class='flexTable col1'>
                        <div class='flexTableCell'>Demonstrate baseline security skills for IT support professionals.</div>
                        <div class='flexTableCell'>Configure device operating systems, including Windows, Mac, Linux, Chrome OS, Android and iOS.</div>
                        <div class='flexTableCell'>Administer client-based as well as cloud-based (SaaS) software.</div>
                        <div class='flexTableCell'>Troubleshoot and problem solve core service and support challenges while applying best practices for documentation, change management, and scripting.</div>
                        <div class='flexTableCell'>Support basic IT infrastructure and networking.</div>
                        <div class='flexTableCell'>Configure and support PC, mobile and IoT device hardware.</div>
                        <div class='flexTableCell'>Implement basic data backup and recovery methods and apply data storage and management best practices.</div>
                    </div>
                </div>
                <h2>Microsoft</h2>
                <div>
                    <a href='https://www.youracclaim.com/badges/6fa32043-c5d5-48b8-9820-d7b2ab3b9e84/public_url' rel='noopener noreferrer' target='_blank'>
                        <img src='/images/MTA+Software+Development+Fundamentals_109x109.png' height='200' width='200' alt='MTA Software Development Fundamentals Badge'/>
                    </a>
                    <h3>Microsoft Technical Associate - Software Development Fundamentals | 12/08/2017</h3>
                    <h4>Description:</h4>
                    <p>MTA certifications address a wide spectrum of fundamental technical concepts, assess and validate core technical knowledge, and enhance technical credibility. This certification measures the candidates ability to understand core programming, object-oriented programming, general software development, web applications, desktop applications, and databases.</p>
                </div>
                <div>
                    <a href='https://www.youracclaim.com/badges/ac331fae-318d-4bca-a074-0925b04ad2af/public_url' rel='noopener noreferrer' target='_blank'>
                        <img src='/images/MSAccess_109x109.png' height='200' width='200' alt='Microsoft Access Specialist Badge'/>
                    </a>
                    <h3>Microsoft Office Specialist - Microsoft Access 2016 | 02/24/2018</h3>
                    <h4>Description</h4>
                    <p>Microsoft Access 2016 earners have an understanding of the Access environment. They understand basic database design principles and the correct application of the principal features of Access 2016. Earners can create and maintain basic Access database objects including tables, relationships, data entry forms, multi-level reports, and multi-table queries.</p>
                </div>
                <h2>AXELOS</h2>
                <div>
                    <a href="https://www.axelos.com/Profile/Public?u=9bf4deef-e5bb-4c8d-9064-1128c5a36334" rel='noopener noreferrer' target='_blank'>
                        <img src='/images/ITIL4-Foundations.png' alt='AXELOS ITIL 4 Foundations Badge' height='200'/>
                    </a>
                    <h3>ITIL Foundations | 04/15/2021</h3>
                    <h4>Description:</h4>
                    <p>The ITIL 4 Foundation certification is designed as an introduction to ITIL 4 and enables candidates to look at IT service management through an end-to-end operating model for the creation, delivery and continual improvement of tech-enabled products and services.</p>
                </div>
                <h2>CIW</h2>
                <div>
                    <a href="./documents/CIW_Site_Devlopment_Associate.pdf" rel='noopener noreferrer' target='_blank'>
                        <img src='/images/CIW_Site_Development_Associate.png' alt='CIW Site Development Associate Badge'/>
                    </a>
                    <h3>Site Development Associate | 09-29-2018</h3>
                    <h4>Description</h4>
                    <p>This course teached the basics of web development using HTML5 and CSS3. Additional topics include JavaScript APIs, code validation, and search engine optimization (SEO).</p>
                </div>
                <h1>Additional Training</h1>
                <h2>LinkedIn Learning</h2>
                <div><h3>Learning Data Science: Understanding the Basics | 11-2016</h3></div>
                <div><h3>Statistics Foundations: 1 | 09-2016</h3></div>
                <div><h3>Learning Design Thinking: Lead Change in Your Organization | 01-2016</h3></div>
                <h2>Udemy</h2>
                <div><h3>The Complete Web Developer: Zero to Mastery | 2020</h3></div>
                <Footer/>
            </div>
        )       
    }
}