import React, { useState } from 'react'
import * as S from "./styles";
import router from 'next/router';


const index = () => {

    const [hero, setHero] = useState([]);

    return (
        <div>
            <S.Campo_Pequisa>
                <S.Name>MYSUPERHERO</S.Name>
                
                <S.Input onChange={(e) => setHero(e.target.value)} />
                <S.Btn>Pequisar</S.Btn>
            </S.Campo_Pequisa>
        </div>
    )
}
export default index