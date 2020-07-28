import styled from 'styled-components';

export const HeaderStyled = styled.header`
    background: #ee5253;
    width: 100%;

   
`;

export const SubContainer = styled.div`

    width: 100%;
    max-width: 1200px;

    margin: auto;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    h1{
        color: #eee;
        font-size: 32px;
    }

    img{
        width: 32px;
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
`;