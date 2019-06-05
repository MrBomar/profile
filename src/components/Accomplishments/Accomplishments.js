import React, {Component} from 'react';
import './Accomplishments.css';

export default class Accomplishments extends Component {
    
    render() {
        return (
            <div id='accomplishments'>
                <h1>Professional Projects</h1>
                <h3>XPO Logistics</h3>
                <table>
                    <tbody>
                        <tr>
                            <td className="bullet">&bull;</td>
                            <td>Designed and implemented a driver performance monitoring and reporting system that helped to identify unnecessary stops, extended breaks, and deviations from route planning. No tool for assessing route efficiency was in place before this tool, saw a 12% reduction in paid overtime.</td>
                        </tr>
                        <tr>
                            <td className="bullet">&bull;</td>
                            <td>Designed and implemented a route status reporting tool that incorporated automated HTML email reports.</td>
                        </tr>
                        <tr>
                            <td className="bullet">&bull;</td>
                            <td>Designed a bar-code solution currently used to track and build customer shipments.</td>
                        </tr>
                        <tr>
                            <td className="bullet">&bull;</td>
                            <td>Devised a route planning tool that combined historical delivery data with Google Maps routing to provide accurate routing estimates.</td>
                        </tr>
                        <tr>
                            <td className="bullet">&bull;</td>
                            <td>Implemented an Access client upgrade tool. Provided automated alerts to client users and automated the upgrade process for the users client application.</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Valspar Coatings</h3>
                <table>
                    <tbody>
                        <tr>
                            <td className="bullet">&bull;</td>
                            <td>Designed and implemented a raw material discrepancy tracking system that reduced shortages by 80%.</td>
                        </tr>
                        <tr>
                            <td className="bullet">&bull;</td>
                            <td>Designed and implemented a raw material reordering system that reduced time spent assessing plant needs by 90%, and helped to reduce on-hand inventories by 20%.</td>
                        </tr>
                        <tr>
                            <td className="bullet">&bull;</td>
                            <td>Designed and implemented a raw material staging process that provided status updates, manged staging processed, and printed labels.</td>
                        </tr>
                        <tr>
                            <td className="bullet">&bull;</td>
                            <td>Designed and implemented a site wide MRO ordering and approval system used for office, maintenance, safety and production materials. Was instrumental in collecting data concerning buying habits and reducing waste.</td>
                        </tr>
                    </tbody>
                </table>
                <div id='certifications'>
                    <h1>Certifications</h1>
                    <a href='https://www.youracclaim.com/badges/6fa32043-c5d5-48b8-9820-d7b2ab3b9e84/public_url'>
                        <img src='./images/MTA+Software+Development+Fundamentals_109x109.png' height='200' width='200' alt='MTA Software Development Fundamentals Badge'/>
                    </a>
                    <a href='https://www.youracclaim.com/badges/9ab39f2c-fd80-4de7-a280-a4ebe2fe0f1b/public_url'>
                        <img src='./images/CompTIA_A_108x108.png' height='200' width='200' alt='CompTIA A+ Badge'/>
                    </a>
                    <a href='https://www.youracclaim.com/badges/ac331fae-318d-4bca-a074-0925b04ad2af/public_url'>
                        <img src='./images/MSAccess_109x109.png' height='200' width='200' alt='Microsoft Access Specialist Badge'/>
                    </a>
                </div>

            </div>
        )       
    }
}