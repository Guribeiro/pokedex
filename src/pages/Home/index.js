import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { PokeList, PagionationStyled } from './styles';

import Loading from '../../components/Loading';

import Container from '../../components/Container';

import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import Pokemon from '../../components/Pokemon';

export default function Home() {

    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState([10, 0]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {

            const [limit, offset] = page;

            const { data } = await api.get('pokemon', {
                params: {
                    limit,
                    offset
                }
            });

            const { results } = data;
            setPokemons(results);
            setLoading(false)
        }
        fetchData();

    }, [page])

    function handlePage(action){
        const [limit, offset] = page;

        if(action === 'back'){

            setPage([limit, offset - limit])
        }
        else{
            setPage([limit, offset + limit])
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
        <Container>
            <PokeList>
                {pokemons.map(pokemon => (
                    <Pokemon key={pokemon.name} {...pokemon} />
                ))}
            </PokeList>
            <PagionationStyled>
                <button onClick={() => handlePage('back')} disabled={page[1] < 10}>
                    <FiChevronsLeft/>
                </button>
                <button onClick={() => handlePage('next')}>
                <FiChevronsRight />
                </button>
            </PagionationStyled>
        </Container>
    )
}
