import styled from 'styled-components';

export const Quadrado = styled.div`
  background: var(--black);
  border-top: 2px solid violet;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 25px;
  padding-bottom: 25px;
  color: var(--white);
  text-align: center;
  align-items: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Circulo = styled.button`
     background-color: blueviolet;
     border-radius: 50px;
     margin: auto;
     width:50px;
     height:20px;
     font-style: normal;
     font-weight: bold;
     text-align:center;
     padding-left: 10px;
     padding-right: 10px;
     padding-top: 25px;
     padding-bottom: 25px;
`;