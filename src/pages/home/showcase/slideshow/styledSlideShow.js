import styles from "styled-components";

export const StyledSlideShowContainer = styles.div`
    height: 100%;
    width: 100%;

    .react-slideshow-container {
        height: 100%;
    }

    .react-slideshow-wrapper.slide {
        height: 100%;
    }

    .images-wrap {
        height: 100%;
    }
`;

export const EachSlide = styles.div`
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height: 100%;
`;
