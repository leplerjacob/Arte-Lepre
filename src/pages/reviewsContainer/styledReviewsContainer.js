import styles from 'styled-components'

export const StyledReviewsContainer = styles.div`
  position: absolute;
  right: 0;
  top: 10vh;
  margin: 0 2% 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  color: whitesmoke;
  background: rgba(0,0,0,0.6);
  border-radius: 10px;
  width: 200px;

  span:first-child {
    margin-bottom: 10px;
  }
  
  span:nth-child(2) {
    font-size: 0.75rem;
  }
  
  span:last-child {
    color: red;
    align-self: flex-end;
  }
`;