import React from 'react'
import * as S from "./styled";
import { use, useEffect, useState } from "react";
import axios from "axios";
import router from 'next/router';

const Cards = () => {

  const [resposta, setResposta] = useState([]);

  useEffect(() => {
    axios
      .get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=iron&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`)
      .then((resposta) => {
        setResposta(resposta.data.data.results);
        console.log(resposta, "Whare");
      })
  }, []);


  return (
    <S.Home>
      <S.CardsPosition>
      {resposta && resposta.map((item) => (
        <S.Cards onClick={() => { router.push("/MyHero") }}>
          {item.name}
        </S.Cards>
      ))}
      </S.CardsPosition>
    </S.Home>
  )
}

export default Cards