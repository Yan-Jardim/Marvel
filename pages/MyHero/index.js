import React from 'react'
import * as S from "./styled";
import Head from "../../components/Head";
import Header_Heros from "../../components/Header_Heros";
import Main_MyHero from "../../components/Main_MyHero";

const index = () => {
  return (
    <S.My>
      <Head />
      <Header_Heros />
      <Main_MyHero />
    </S.My>
  )
}

export default index