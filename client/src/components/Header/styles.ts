import styled from 'styled-components';

export const AppHeader = styled.header`
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    width: 100%;
    top: 0;
    left: 0;
    padding: 20px 0;
    display: blcok;
    justify-content: center;
    z-index: 10;
    box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
    margin-bottom: 30px;
`;

export const HeaderSection = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 1024px;
    width: 100%;
`;
