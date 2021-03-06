import { space } from './spacing'

const gridTwoToThree = {
    min: "90px",
    pef: "20vw",
    max: "300px"
}
const previewDisplay = {
    min: "240px",
    pef: "75vw",
    max: "850px"
}

const bannerImageWidth = {
    min: "111px",
    pef: "12vw",
    max: "280px"
}

const bannerImageHeight = {
    min: "111px",
    pef: "12vw",
    max: "280px"
}

const headerWidth = {
    min: "250px",
    pef: "90vw",
    max: "1500px"
}

const aboutTitleWidth = {
    min: headerWidth.min,
    pef: `calc(${headerWidth.pef} * 0.6)`,
    max: `calc(${headerWidth.max} * 0.7)`
}

const article = {
    min: headerWidth.min,
    pef: `calc(${headerWidth.pef} * 0.8)`,
    max: `calc(${headerWidth.max} * 0.8)`
}

// blog preview index 
const blogImageDivWidth = {
    min: `calc((${headerWidth.min} - (${space.xsMargin.min} * 2)) / 2)`,
    pef: "45%",
    max: `calc(${headerWidth.max} * 0.3)`
}
const blogPreviewArticleWidth = {
    min: "calc(100% * 0.5)",
    pef: "55%",
    max: `calc(${headerWidth.max} * 0.6)`
}

const blogPreviewDivWidth = {
    min: `calc(${headerWidth.min} - (${space.xsMargin.min} * 2))`,
    pef: "80vw",
    max: `calc(${headerWidth.max} - (${space.xsMargin.max} * 2))`
}

// grid / columns

const gridSection = {
    min: `calc(${headerWidth.min} - (${space.xsMargin.min} * 2))`,
    pef: "80vw",
    max: `calc(${headerWidth.max} - (${space.xsMargin.max} * 2))`
}

const gridDiv = {
    min: `${gridSection.min}`,
    pef: `calc((${gridSection.pef} - (${space.medMargin.pef} * 2)) / 4 )`,
    max: `calc((${gridSection.max} - (${space.medMargin.max} * 2)) / 4 )`
}

// images
const fullSizeImage = {
    min: '220px',
    pef: '34vw',
    max: '714px'
}

//input boxes

const inputWidth = {
    min: `calc(${fullSizeImage.min} - 20px)`,
    pef: `calc(${fullSizeImage.pef} - 50px)`,
    max: `calc(${fullSizeImage.max} - 50px)`
}

// buttons

const primBtn = {
    min: `calc(${inputWidth.min} / 2)`,
    pef: `calc(${inputWidth.pef} / 3)`,
    max: `calc(${inputWidth.max} / 3)`
}

const secondaryBtn = {
    min: `calc(${primBtn.min} / 2)`,
    pef: `calc(${primBtn.pef} / 2)`,
    max: '40px'
}

// filter menu

const filterDivWidth = {
    min: `${headerWidth.min}`,
    pef: '40vw',
    max: '450px'
}
export const width = { gridTwoToThree, previewDisplay, bannerImageWidth, bannerImageHeight, headerWidth, aboutTitleWidth, article, blogImageDivWidth, blogPreviewArticleWidth, blogPreviewDivWidth, gridSection, gridDiv, fullSizeImage, inputWidth, primBtn, secondaryBtn, filterDivWidth };