import React, { useState } from 'react'
import * as S from "./styles";
import router from 'next/router';

const index = () => {

    const [herois, setHerois] = useState();

    const onSubmitSearch = (event) => {
        event.preventDefault()
        router.push(`/Heros?name=${herois}`);
    }
    return (
        <S.Campo_Pequisa>
            <S.Name>MYSUPERHERO</S.Name>
            <S.Input onChange={(e) => setHerois(e.target.value)}
                value={herois} />
            <S.Btn onClick={onSubmitSearch}>Pequisar</S.Btn>
        </S.Campo_Pequisa>
    )
}
export default index