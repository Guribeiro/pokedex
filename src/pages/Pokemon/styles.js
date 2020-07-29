import styled from 'styled-components';

export const SubContainer = styled.main`
    border-radius: 4px;
    margin-top: 30px;
    background: #ee5253;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 60px;

	@media(max-width: 615px){
		margin-top: 20px;
		padding: 20px;
	}

	@media(max-width: 555px){
		margin-top: 15px;
		padding: 10px;
	}

	@media(max-width: 493px){
		margin-top: 7px;
		padding: 5px;
	}

	@media(max-width: 367px){
		margin: 5px;
		padding: 3px;
	}

`;

export const PokedexStyled = styled.section`
    display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px;

	@media(max-width: 615px){
		flex-direction: column-reverse;
	}

	@media(max-width: 493px){
		width: auto;
		padding: 7px;
	}

	@media(max-width: 367px){
		padding: 4px;
	}


	a{
		text-decoration: none;
		font-size: 16px;
		padding: 6px;
		border-radius: 4px;
		background:  #ee5253;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		border: 2px solid #fff;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

		@media(max-width: 493px){
			font-size: 12px;
		}

		@media(max-width: 367px){
			font-size: 12px;
			width: 100%;
		}

		&:hover{
			color:#ee5253;
			background: #fff;
		}

		svg{
			margin-right: 6px;
			font-size: 20px;

			@media(max-width: 493px){
			font-size: 20px;
			width: auto;
			}

			@media(max-width: 367px){
				display:none;
			}
		}
	}
`;

export const PokemonInfos = styled.article`
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	padding: 10px 30px;
	background: #f5f6fa;
	margin: 20px;
	border-radius: 4px;

	@media(max-width: 615px){
		max-width: 400px;
	}

	@media(max-width: 555px){
		max-width: 350px;
	}

	@media(max-width: 493px){
		padding: 5px 15px;
	}

	@media(max-width: 367px){
		max-width: 250px;
	}

	@media(max-width: 305px){
		max-width: 210px;
	}


    figure{
        border: 1px solid #eee;
        margin: 14px 0;
        padding: 20px;
        background: #fff;
        display: flex;
        flex-direction: column;

		@media(max-width: 615px){
			max-width: 300px;
		}

		@media(max-width: 555px){
			max-width: 350px;
		}
		@media(max-width: 493px){
			max-width: 350px;
			padding: 10px;
		}

		@media(max-width: 367px){
			max-width: 300px;
			padding: 5px;
		}
	}

	img{

		border: 1px solid #ccc;
		width: 300px;

		@media(max-width: 615px){
			width: 250px;
		}

		@media(max-width: 555px){
			width: 200px;
		}
		@media(max-width: 493px){
			max-width: 200px;
		}

		@media(max-width: 367px){
			max-width: 180px;
		}

		@media(max-width: 305px){
			max-width: 140px;
		}
	}

	h3{
		margin: 15px 0 4px;
		border-bottom: 1px solid #ccc;
		text-align: center;
		font-size: 32px;
		text-transform: capitalize;

		@media(max-width: 555px){
			font-size: 26px;
		}

		@media(max-width: 493px){
			font-size: 22px;
		}

		@media(max-width: 305px){
			font-size: 16px;
		}
	}
`;

export const PokemonStats = styled.figcaption`
    margin-top: 4px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

    strong{
        font-size: 12px;
        background: #ee5253;
        color: #fff;
        border-radius: 4px;
        padding: 4px 6px;

		@media(max-width: 555px){
			font-size: 10px;
		}

		@media(max-width: 493px){
			font-size: 10px;
			padding: 2px 3px;
		}

		@media(max-width: 305px){
			font-size: 8px;
			padding: 1px 2px;
		}
    }

    h4{
        color: #444;
        padding: 4px;
        font-size: 14px;
        text-transform: uppercase;

		@media(max-width: 555px){
			font-size: 12px;
		}

		@media(max-width: 493px){
			font-size: 10px;
		}

		@media(max-width: 305px){
			font-size: 8px;
		}
    }

    span{
            width: 100%;
            margin: 4px auto;
            margin-bottom: 14px;
            padding: 4px;
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

		@media(max-width: 555px){
			font-size: 10px;
		}

		@media(max-width: 305px){
			font-size: 8px;
		}
    }

    small{
        text-transform: lowercase;
        font-size: 12px;
        font-weight: bold;
        background: #3498db;
        color: #fff;
        border-radius: 4px;
        padding: 4px 6px;

		@media(max-width: 555px){
			font-size: 10px;
		}

		@media(max-width: 493px){
			padding: 2px 3px;
		}

		@media(max-width: 305px){
			font-size: 8px;
			padding: 1px 2px;
		}
    }

`;

