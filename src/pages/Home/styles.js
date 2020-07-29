import styled from 'styled-components';

export const PokeList = styled.ul`
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const PagionationStyled = styled.section`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        background: #ee5253;
        color: #fff;
        border: none;
        padding: 6px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: start;

        &:disabled{
            cursor: not-allowed;
            opacity: 0.8;
        }

        svg{
            font-size: 22px;
        }
    }
`;


