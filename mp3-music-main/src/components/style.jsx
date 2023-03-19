import styled from "styled-components";

export const Container = styled.div`
position: fixed;
bottom: 0;
left: 50%;
transform: translateX(-50%);
width: 100%;
height: 88px;
background-color: var(--dark-background);
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
z-index: 100;
display: flex;
align-items: center;
justify-content: space-between;
background: linear-gradient(171deg, rgba(255,160,122) 0%, rgba(255,127,80) 35%, rgba(255,99,71) 100%);


  .box {
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 20px;


    h2 {
      margin-bottom: 1rem;
      text-align: center;
    }

    .buttons {

        display: flex;
        flex-direction:row;
        gap: 1rem;

      .button-element {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        color: var(--background-color);
        font-size: 1.5rem;
        margin: 0 10px;
        width: 2rem;
        height: 2rem;
        
      }

      .button-element:hover {
        box-shadow: none;
        color: var(--gray);
      }
    }
  }
`;
