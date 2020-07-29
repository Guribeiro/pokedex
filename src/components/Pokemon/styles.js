import styled from 'styled-components';

export const PokemonStyled = styled.li.attrs(props => ({

}))`

    min-width: 200px;
    margin: 8px auto;
    padding: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;

    h1{
        margin: 6px auto;
        font-style: italic;
        color: #4b4b4b;
        font-size: 14px;
    }


    figure{
        border: 1px solid #ccc;
		display: flex;
		min-width: 180px;
		flex-direction: column;
		align-items: center;
        margin-bottom: 7px;
        padding: 20px;
        overflow: hidden;

        img{
            transition: 0.5s ;
            cursor: pointer;

            &:hover{
                transform: scale(1.1);
            }
        }

		h2{
			text-transform: capitalize;
			margin-top: 14px;
			font-size: 18px;
		}
    }

    a{
        text-decoration: none;
        text-align: center;
        font-size: 12px;
        width: 120px;
        margin: 12px auto;
        background: #ee5253;
        color: #fff;
        border: none;
        padding: 6px;
        border-radius: 4px;

        transition: 0.2s;

        &:hover{
            -webkit-box-shadow: 0px 6px 5px -3px rgba(0,0,0,0.3);
            -moz-box-shadow: 0px 6px 5px -3px rgba(0,0,0,0.3);
            box-shadow: 0px 6px 5px -3px rgba(0,0,0,0.3);
        }
    }
`;

export const ButtonFavorite = styled.button.attrs(props => ({
    favorite: props.favorite
}))`

    padding: 2px 6px;
    background: transparent;

    svg{
        color: #4b4b4b;
        fill: ${props => props.favorite ? '#fff200' : 'transparent'};
        font-size: 20px;
        font-weight: 900;
		transition: 0.2s;

		&:hover{
			fill: #fff200;
		}

		&:active{
			transform: translateY(4px);
		}
    }

`;


