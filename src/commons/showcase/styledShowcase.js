import styles from 'styled-components'
import pitloo from '../../images/Pitloo.jpg'

const StyledShowcase = styles.div`
    width: 100vw;
    height: 1000px;
    background: url(${pitloo}) no-repeat center center/cover; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`

export const ShowcaseOverlay = styles.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.1)
`

export const ShowcaseText = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 65%;
    text-align: center;
    justify-content: center;
    margin: auto;
    font-size: 1.25rem;
    letter-spacing: 2px;
    position: relative;

    span:last-child {
        font-size: 1rem;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
    }
`

export default StyledShowcase