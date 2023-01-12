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
                console.log(response, "misericordia");
            });
    }, [idHeroes]);

    return (
        <>
            <S.Contents>

                {resposta && resposta.map((herois) => {
                    return (
                        <>
                            <S.Header>

                                <S.Img src={`${herois.thumbnail.path}.${herois.thumbnail.extension}`} />
                                <S.Description>
                                    <S.HUM>{herois.name}</S.HUM>
                                    <S.Parag>{herois.description}</S.Parag>
                                </S.Description>
                            </S.Header>

                            <S.Main>
                                {herois.comics.items.map((dados) => {
                                    return (
                                        <>
                                            <S.Comics>{dados.name}</S.Comics>
                                            {/* <S.Eventos>Eventos</S.Eventos>
                                            <S.Series>Series</S.Series>
                                            <S.Historia>Historia</S.Historia> */}
                                        </>
                                    )
                                })}
                            </S.Main>
                        </>
                    )
                })}



            </S.Contents>
        </>
    )
}

export default index