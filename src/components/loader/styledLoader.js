import styles, {keyframes} from "styled-components";

export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const StyledLoader = styles.div`
    
`;

export const LoaderBackground = styles.div`
    display: block;
    background-color: #1d3356;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: whitesmoke;
`;



export const Logo = styles.div`
    height: 40vmin;
    pointer-events: none;
    margin: 40px 0;
    img {
        @media  (prefers-reduced-motion: no-preference) {
            animation: ${rotate} infinite 2s linear;
        }
    }
`;

export const StyledTransition = styles.div`
.loader-enter {
    opacity: 0;
        z-index: 999;
    }

    .loader-enter-active {
        opacity: 1;
        transition: opacity 800ms;
    }

    .loader-exit {
        opacity: 1;
    }

    .loader-exit-active {
        opacity: 0;
        transition: opacity 2000ms;
    }

`;
