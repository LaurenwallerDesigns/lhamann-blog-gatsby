import React from 'react';
import { Link } from 'gatsby';
import SectionDivider from '../../reusable/section-divider';
import MidSectionStyle from './styles/mid-section-style'

const MidSection = () => (
    <React.Fragment>
        <SectionDivider />
        <MidSectionStyle>
            <h1> Fun Facts </h1>
            <ul>
                <li>Frontend Developer for 5 years</li>
                <li>Drawn to problem solving</li>
                <li>Mom to three little ones</li>
                <li>Being creative is my hobby</li>
            </ul>
            <Link to="about" className="page-links">Learn More <span className="arrow">&rarr;</span></Link>
        </MidSectionStyle>
    </React.Fragment>

)

export default MidSection;