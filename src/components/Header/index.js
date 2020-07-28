import React from 'react';

import { HeaderStyled, SubContainer } from './styles';

import pokeball from '../../assets/icons/pokemon.svg';

export default function Header(){
    return(
        <HeaderStyled>
            <SubContainer>
                <img src={pokeball} alt=""/>
                <h1>Pokédex</h1>
                <img src={pokeball} alt=""/>
            </SubContainer>
        </HeaderStyled>
    )
}