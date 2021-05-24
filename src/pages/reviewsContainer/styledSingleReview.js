import styles from 'styled-components'

export const StyledSingleReview = styles.div`
    display: flex;
    flex-direction: column;

    &:before {
        position: absolute;
        content: '';
        top: 100%;
        left: 80%;
        border-top: 15px solid rgba(0,0,0,0.6);
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
    }
`