import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import MiddleStyle from '../components/middle-style';


const MidIndex = ({ props }) => (
    <MiddleStyle className="mid-section">
        <h1> Quick Facts </h1>
        <ul>
            <li className="mid-li"> Learning and Developing for 5 years </li>
            <li className="mid-li"> heres number two </li>
            <li className="mid-li"> And number three </li>
            <li className="mid-li"> Definitely number 4 </li>
            <li className="mid-li"> .... maybe a number 5 </li>
        </ul>
        <Link to="/about" css={css`align-self: flex-end;`}><span className="special-link">Want to know more?</span><span className="load-link">&rarr;</span></Link>
    </MiddleStyle>
);

export default MidIndex;