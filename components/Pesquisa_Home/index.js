import React from 'react'
import * as S from "./styles";
import router from 'next/router';


const index = () => {
    return (
        <div>
            <S.Campo_Pequisa>

                <S.Name onClick={() => { router.push("/Heros") }}>MYSUPERHERO</S.Name>
                <S.Input />
                <S.Btn>Pequisar</S.Btn>
            </S.Campo_Pequisa>
        </div>
    )
}

export default index