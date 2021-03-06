import styled from '@emotion/styled'
import { clamps, colors, flex } from '../../global/global'

const TemplateStyle = styled('article')`
    width: ${clamps.headerWidth};
    margin: ${clamps.marginTop} auto;
    padding: 0 ${clamps.medMargin};
    ${flex.flexCol}
    .title {
        margin-bottom: ${clamps.xsMargin};
    }
    h3 {
        margin-top: ${clamps.marginTop};
    }
    .author-span {
        margin: ${clamps.xsMargin} auto;
    }
    .gatsby-resp-image-wrapper {
        width: ${clamps.fullSizeImage};
        margin: ${clamps.marginTop} auto;
    }
    code {
        color: ${colors.mainComp};
    }
    a {
        color: ${colors.mainBold};
        &:hover {
            font-style: italic;
        }
    }


`

export default TemplateStyle;