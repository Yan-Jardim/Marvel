import React from 'react'
import * as S from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";

const index = () => {
    const [resposta, setResposta] = useState();

    let url
    let idHeroes

    if (typeof window !== 'undefined') {
        url = window.location?.href;
        idHeroes = url.split("id=")[1];
    }

    useEffect(() => {
        axios
            .get(
                `https://gateway.marvel.com:443/v1/public/characters/${idHeroes}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
                {
                    headers: {},
                }
            )

            .then((response) => {
                setResposta(response?.data?.data?.results);
            });
    }, [idHeroes]);

    return (
        <>
            {resposta && resposta.map((herois) => {
                return (
                    <>
                        <S.Header>
                            <S.Img src={`${herois.thumbnail.path}.${herois.thumbnail.extension}`} />
                            <S.Description>
                                <S.Title>{herois.name}</S.Title>
                                <S.Parag>{herois.description}</S.Parag>
                            </S.Description>
                        </S.Header>
                        <S.Main>
                            <S.Cards>
                                <S.Comics>
                                    <h1>Comics</h1>
                                    {herois.comics.items.map((Comic) => {
                                        return (
                                            <S.Dados>{Comic.name}</S.Dados>
                                        )
                                    })}
                                </S.Comics>
                                <S.Eventos>
                                    <h1>Eventos</h1>
                                    {herois.events.items.map((event) => {
                                        return (
                                            <S.Dados>{event.name}</S.Dados>
                                        )
                                    })}
                                </S.Eventos>
                                <S.Series>
                                    <h1>Series</h1>
                                    {herois.series.items.map((serie) => {
                                        return (
                                            <S.Dados>{serie.name}</S.Dados>
                                        )
                                    })}
                                </S.Series>
                                <S.Historia>
                                    <h1>Historia</h1>
                                    {herois.stories.items.map((Hist) => {
                                        return (
                                            <S.Dados>{Hist.name}</S.Dados>
                                        )
                                    })}
                                </S.Historia>
                            </S.Cards>
                        </S.Main>
                    </>
                )
            })}
        </>
    )
}
export default index