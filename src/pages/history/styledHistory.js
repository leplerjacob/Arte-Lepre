import styles from 'styled-components'

export const StyledHistory = styles.div`
    width: 100%;
    background: #fffefa; // white
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    span {
        font-family: "OpenSans"
    }
    
    h2 {
        color: #d6af63; // Gold
    }
`

export const ArticleContainer = styles.div`
    width: 100%;
    max-width: 650px;
    overflow: hidden;

    img {
        height: 300px;
    }

    span {
        font-family: "OpenSans";
        font-size: 1.5rem;
    }
`

export const LeftFloat = styles.div`
    float: left;
    margin: 0 20px 0 0;
`

export const RightFloat = styles.div`
    float: right;
    margin: 20px 0 0 20px;
`