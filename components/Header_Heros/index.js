import React from 'react'
import * as S from "./styled";
import router from 'next/router';

const index = () => {
  return (
    <S.header>
      <S.Title onClick={() => { router.push("http://localhost:3000/") }}>MYSUPERHERO</S.Title>
    </S.header>
  )
}

export default index