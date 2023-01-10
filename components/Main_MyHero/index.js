import React from 'react'
import * as S from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";

const index = () => {

    const [hero, setHero] = useState([]);

    useEffect(() => {
        axios
            .get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=iron&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`)
            .then((hero) => {
                setHero(hero.data.data.results);
                console.log(hero, "Purple");
            })
    }, []);

    return (
        <>
            <S.Contents>


                {hero && hero.map((item) => (
                <>oi</>
                ))}

                <S.Header>
                    <S.Img />
                    <S.Description>
                    </S.Description>
                </S.Header>

                <S.Main>
                    <S.Comics>Comics</S.Comics>
                    <S.Eventos>Eventos</S.Eventos>
                    <S.Series>Series</S.Series>
                    <S.Historia>Historia</S.Historia>
                </S.Main>

            </S.Contents>
        </>
    )
}

export default index