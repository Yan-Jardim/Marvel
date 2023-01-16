import React from 'react'
import * as S from "./styled";
import router from 'next/router';

const index = () => {
  return (
    <S.header>
      <S.Title onClick={() => { router.push("/") }}>MYSUPERHERO</S.Title>
    </S.header>
  )
}

export default index