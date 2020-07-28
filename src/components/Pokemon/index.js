import React, { useEffect, useState } from 'react';
import { pokemon } from '../../services/api';
import { Link } from 'react-router-dom';

import { filter } from '../../utils/index';

import { PokemonStyled, Loading, Details, TypeStyled, AttributeStyled } from './styles';


export default function Pokemon({ entry_number }) {

    const [objPokemon, setObjPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState(false);

    useEffect(() => {

        const loadPokemons = async () => {
            const response = await pokemon.get(`${entry_number}`);

            const { data, status } = response;


            if (status === 200) {

                const { id, name, height, sprites, stats, types } = data;

                const { front_default } = sprites

                const pokemon_hp = filter(stats, 'hp');
                const pokemon_attack = filter(stats, 'attack');
                const pokemon_defense = filter(stats, 'defense');
                const pokemon_speed = filter(stats, 'speed');

                console.log(pokemon_attack)

                const dataFetched = {
                    id,
                    name,
                    front_default,
                    height,
                    stats: {
                        hp: [...pokemon_hp],
                        attack: [...pokemon_attack],
                        defense: [...pokemon_defense],
                        speed: [...pokemon_speed],
                    },
                    types
                }

                setObjPokemon(dataFetched);
                setLoading(false);
            }
        }
        loadPokemons();
    }, [entry_number])

    function showDetails() {
        if (details) {
            setDetails(false);
        }
        else {
            setDetails(true);
        }
    }

    if (loading) {
        return (
            <Loading>
                <h1>Loading</h1>
            </Loading>

        );
    }
    return (
        <PokemonStyled>
            <h1>#{entry_number}</h1>
            <figure>
                <img src={objPokemon.front_default} alt={objPokemon.name} />
            </figure>
            <strong>{objPokemon.name}</strong>
            <button onClick={showDetails}>See more</button>
            {details ?
                <Details>
                    <TypeStyled >
                        {objPokemon.types.map(objpoke => (
                            <li>
                                {objpoke.type.name}
                            </li>
                        ))}
                    </TypeStyled>
                    <AttributeStyled>
                        {objPokemon.stats.hp.map(stat => (
                            <span>
                                {stat.stat.name} - {stat.base_stat}
                            </span>
                        ))}

                        <section>
                            {objPokemon.stats.attack.map(stat => (
                                <strong>
                                    {stat.stat.name}:{stat.base_stat}
                                </strong>
                            ))}

                            {objPokemon.stats.defense.map(stat => (
                                <strong>
                                    {stat.stat.name}:{stat.base_stat}
                                </strong>
                            ))}

                            {objPokemon.stats.speed.map(stat => (
                                <strong>
                                    {stat.stat.name}:{stat.base_stat}
                                </strong>
                            ))}

                            <strong>
                                Height:{objPokemon.height}
                            </strong>
                        </section>
                    </AttributeStyled>
                </Details>
                : ''}
            <Link>See evolutions</Link>
        </PokemonStyled>
    )
}
