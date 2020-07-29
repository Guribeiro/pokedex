import React, { useEffect, useState, Fragment } from 'react';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

import { FiStar } from 'react-icons/fi';

import { PokemonStyled, ButtonFavorite } from './styles';


export default function Pokemon({ name }) {

	const [pokemons, setPokemons] = useState([]);
	const [favorite, setFavorite] = useState(false);

	useEffect(() => {

		const loadPokemons = async () => {
			const response = await api.get(`pokemon/${name}`);

			const { data, status } = response;

			if (status === 200) {

				const { id, name, sprites } = data;

				const { front_default } = sprites

				const dataFetched = {
					id,
					name,
					front_default,
					favorite,
				}
				setPokemons([dataFetched]);
			}
		}

		loadPokemons();
	}, [name, favorite])


	const handleFavorite = (pokemon) => {

		const { favorite } = pokemon;

		if (favorite) {
			setFavorite(false)
		}
		else {
			setFavorite(true)
		}

	}

	return (
		<Fragment>
			{pokemons.map(pokemon => (
				<PokemonStyled key={pokemon.id}>
					<h1>#{pokemon.id}</h1>
					<figure>
						<img src={pokemon.front_default} alt="" />
						<h2>{pokemon.name}</h2>
					</figure>
					<ButtonFavorite onClick={() => { handleFavorite(pokemon) }} favorite={pokemon.favorite}>
						<FiStar />
					</ButtonFavorite>
					<Link to={`/pokemon/${pokemon.name}`}>Details</Link>
				</PokemonStyled>
			))}
		</Fragment>
	)
}
