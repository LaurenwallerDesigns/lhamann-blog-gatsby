import { colors } from '../color/colors';
import { clamps } from '../responsive/clamps';
const h1Style = `
    font-family: "Open Sans Condensed";
    font-weight: 600;
    color: ${colors.darkNeutral};
    font-size: ${clamps.h1Size};
    text-align: center;
    margin-bottom: ${clamps.marginBottom};
    
`
const h2Style = `
    font-family: "Elsie Swash Caps";
    font-weight: 400;
    color: ${colors.accent};
    font-size: ${clamps.h2Size};
    text-align: center;
`
const h3Style = `
    font-family: "Open Sans Condensed";
    font-weight: 300;
    color: ${colors.darkNeutral};
    font-size: ${clamps.h3Size};
    text-align: center;
`
const h4Style = `
    font-family: "Open Sans";
    font-weight: 700;
    font-style: italic;
    color: ${colors.darkNeutral};
    font-size: ${clamps.h4Size};
    text-align: center;
`

const pStyle = `
    font-family: "Open Sans";
    font-weight: 400;
    color: ${colors.darkNeutral};
    font-size: ${clamps.pSize};
`

const anchorStyle = `
    font-family: "Elsie";
    font-weight: 400;
    color: ${colors.mainBold};
    text-decoration: none;
    font-size: ${clamps.anchorSize};
    &:hover {
        font-style: italic;
    }
    &.page-links {
        text-decoration: underline;
        font-size: ${clamps.spanSize};
    }
`
const navStyle = `
    font-family: "Open Sans";
    font-weight: 400;
    color: ${colors.darkNeutral};
    font-size: ${clamps.navSize};
    transition: all 0.3s ease-in-out;
    &:hover,
    &.active {
        font-weight: 700;
        color: ${colors.accent}
    }
`

const logoStyle = `
    font-family: "Elsie Swash Caps";
    font-weight: 900;
    color: ${colors.mainBold};
    text-decoration: none;
    font-size: ${clamps.logoSize};
`
const aboutSpan =`
    font-family: "Elsie Swash Caps";
    font-weight: 400;
    color: ${colors.accent};
    font-size: calc(${clamps.h1Size} * 2);
`

const spanStyle = `
    font-family: "Open Sans";
    font-weight: 300;
    font-style: italic;
    color: ${colors.darkNeutral};
    font-size: ${clamps.spanSize};
`

const introStyle = `
    font-family: "Open Sans Condensed";
    font-weight: 700;
    color: ${colors.mainComp};
    font-size: ${clamps.introSize};
`

const largeLink =`
    font-family: "Open Sans";
    font-weight: 300;
    color: ${colors.accent};
    text-align: center;
    margin-top: ${clamps.marginTop};
    margin-bottom: ${clamps.xsMargin};
    font-size: ${clamps.largeLinkSize};
    &:hover {
        font-style: italic;
        text-decoration: underline;
    }
`

const label = `
    font-family: "Elsie";
    font-weight: 400;
    color: ${colors.darkNeutral};
    font-size: ${clamps.pSize};
    transition: color 1s;
    &:focus-within {
        font-weight: 900;
        color: ${colors.accent};
    }
`

const input =`
    font-family: "Open Sans";
    font-weight: 300;
    color: ${colors.darkNeutral};
    font-size: calc(${clamps.pSize} * 0.8);
    border: none;
    background: #fffeff;
    border: solid 2px transparent;
    outline: none;
    box-shadow: -1px 2px 4px rgba(50, 50, 50, 0.2);
    transition: all 1s;
    &:focus {
        outline: ${colors.mainBold};
        border: solid 3px ${colors.mainBold};
        background: #fffdff;
        box-shadow: inset -1px 2px 4px rgba(50, 50, 50, 0.2);
    }
    &:-internal-autofill-selected {
        background: #fffdff !important;
    }
`

const categoryTag =`
    font-family: "Elsie Swash Caps";
    font-weight: 300;
    color: ${colors.mainBold};
    font-size: ${clamps.catTags};
    &:hover,
    &:focus {
        animation: pastelRainbow 2s infinite;
    }
`
const typographyStyles = `
    h1 {
        ${h1Style}
    }

    h2 {
        ${h2Style}
    }

    h3 {
        ${h3Style}
    }

    h4 {
        ${h4Style}
    }

    p {
        ${pStyle}
    }

    .page-links {
        ${anchorStyle}
    }
    ul {
        padding-inline-start: 0px;
        li {
            ${pStyle}
        }
    }
    nav ul li a {
        ${navStyle}
    }

    .logo {
        ${logoStyle}
    }

    .intro {
        ${introStyle}
    }

    .small,
    .author-span {
        ${spanStyle}
    }
    .large-link,
    .load-link {
        ${largeLink}
    }
    .about-font-span {
        ${aboutSpan}
    }

    label {
        ${label}
    }
    input,
    textarea {
        ${input}
    }

    .tags {
        ${categoryTag}
        margin-right: ${clamps.xsMargin};
    }
`
export default typographyStyles;