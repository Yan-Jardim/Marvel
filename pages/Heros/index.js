import React from 'react'
import * as S from "./styled";
import Header_Heros from "../../components/Header_Heros";
import Cards_Heros from "../../components/Cars_Heros";


const Heros = () => {

    return (
        <S.Heros>
            <Header_Heros />
            <Cards_Heros/>
        </S.Heros>
    )
}

export default Heros