import styled from 'styled-components';

export const PokemonStyled = styled.li.attrs(props =>({

}))`

    min-width: 200px;
    margin: 8px auto;
    padding: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin: 6px auto;
        font-style: italic;
        color: #4b4b4b;
        font-size: 14px;
    }

    strong{
        text-transform: capitalize;
    }

    button{
        width: 100px;
        margin-top: 7px;
        background: #ee5253;
        color: #fff;
        border: none;
        padding: 6px;
        border-radius: 4px;

    }

    figure{
        border: 1px solid red;
        padding: 12px;
        margin-bottom: 7px;

        img{
            border: 1px solid blue;
        }

    }

    a{
        text-decoration: none;
        margin: 7px  auto; 
        font-size: 12px;
        color: #222;

        &:hover{
            text-decoration: underline;
        }
    }
`;

export const Loading = styled.div`
    border: 1px solid blue;
    min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1{
		color: #222;
		font-size: 36px;
	}
`;

export const Details = styled.section`
    min-width: 150px;
    margin: 8px auto;
    padding: 8px;

    border: 1px solid red;
`;

export const TypeStyled = styled.ul`
    list-style: none;
    border: 1px solid green;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 10px;
    padding: 4px;

    li{
        font-weight: 600;
        text-transform: uppercase;
    }
    strong{
        text-transform: lowercase;
    }
`;

export const AttributeStyled = styled.article`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 4px;

    span{
        width: 100%;
        margin: 4px auto;
        padding: 2px;
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-transform: uppercase;
        color: #fff;
        background: #3ae374;
        border-radius: 50px;
        border: 2px solid #218c74;
    }

    section{
        border: 1px solid blue;
        width: 100%;
        margin: 4px auto;
        padding: 2px;

        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-gap: 2px;
        

        strong{
            border: 1px solid red;
            font-size: 10px;
        }
    }
`;


