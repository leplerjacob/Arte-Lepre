import styles from "styled-components";

export const StyledTransition = styles.div`
    .review-enter {
        opacity: 0;
    }
    .review-enter-active {
        opacity: 1;
        transition: opacity 800ms;
    }
    .review-exit {
        opacity: 1;
    }
    .review-exit-active {
        opacity: 0;
        transition: opacity 2000ms;
    }
`;
