import styled from '@emotion/styled'
import { clamps, margin, flex } from '../../global/global'
const AllBlogStyle = styled('section') `
    width:${clamps.gridSectionWidth};
    ${margin.center}
    ${flex.flexCol}
    ${flex.alignItemsCenter}
    .grid-div {
        ${flex.flexRow}
        flex-wrap: wrap;
    }
`

export default AllBlogStyle;