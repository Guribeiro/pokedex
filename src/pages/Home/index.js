import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { PokeList } from './styles';

import Container from '../../components/Container';

import Pokemon from '../../components/Pokemon';

export default function Home() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const { data } = await api.get('/2');

            const { pokemon_entries } = data;

            setPokemons(pokemon_entries);
        }
        fetchData();

    }, [])

    return (
        <Container>
            <PokeList>
                {pokemons.map(pokemon => (
                    <Pokemon key={pokemon.entry_number} {...pokemon} />
                ))}
            </PokeList>
        </Container>
    )
}