import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { SubContainer, PokedexStyled, PokemonInfos, PokemonStats } from './styles';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Loading from '../../components/Loading';

import Container from '../../components/Container';



export default function Pokemon({ match }) {

	const [pokemon, setPokemon] = useState({})
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		const { name } = match.params;

		const loadPokemon = async () => {

			const response = await api.get(`pokemon/${name}`);

			const { data, status } = response;

			if (status === 200) {

				const { id, height, weight, sprites, stats, types } = data;

				const { front_default } = sprites;

				const newStats = stats.map((stat, key) => {
					const obj = {
						key,
						name: stat.stat.name,
						value: stat.base_stat
					}
					return obj;
				})

				const [hp, attack, defense, , , speed] = newStats;

				const pokemon_stats = {
					hp,
					attack,
					defense,
					speed
				}

				const dataFetched = {
					id,
					name,
					front_default,
					stats: pokemon_stats,
					types,
					height,
					weight,
				}
				setPokemon(dataFetched);
				setLoading(false)
			}
		}

		loadPokemon();

	}, [match])

	if (loading) {
		return (
			<Loading>
				<h1>Loaging</h1>
			</Loading>)
	}

	return (
		<Container>
			<SubContainer>
				<PokedexStyled>
					<Link to='/'>
						<FiArrowLeft />
						Go back
					</Link>
					<PokemonInfos>
						<figure>
							<img src={pokemon.front_default} alt={pokemon.name} />
							<h3>
								{pokemon.name}
							</h3>
							<PokemonStats>
								{pokemon.types.map((type, index) => (
									<h4 key={index}>{type.type.name}</h4>
								))}
							</PokemonStats>
							<PokemonStats>
								<span> {pokemon.stats.hp.name} / {pokemon.stats.hp.value}</span>
								<small>Height:{pokemon.height}</small>
								<small>Weight:{pokemon.weight}</small>
							</PokemonStats>
							<PokemonStats>
								<strong>{pokemon.stats.attack.name}:{pokemon.stats.attack.value}</strong>
								<strong>{pokemon.stats.defense.name}:{pokemon.stats.defense.value}</strong>
								<strong>{pokemon.stats.speed.name}:{pokemon.stats.speed.value}</strong>
							</PokemonStats>
						</figure>
					</PokemonInfos>

				</PokedexStyled>
			</SubContainer>
		</Container>
	)
}
