import * as S from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { router } from "next/router";
import Erro_Pesquisa from "../Erro_Pesquisa"

const index = () => {
  const [resposta, setResposta] = useState();

  let url
  let nameHeroes

  if (typeof window !== 'undefined') {
    url = window.location?.href;
    nameHeroes = url.split("name=")[1];
  }

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameHeroes}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`
      )
      .then((resposta) => {
        setResposta(resposta.data.data.results);
      });
  }, []);

  return (
    <S.Home>
      {resposta?.length > 0 ? (
        <S.CardsPosition>
          {resposta && resposta.map((item) => (
            <S.Cards onClick={() => { router.push(`/MyHero?id=${item.id}`) }}>
              <S.Name>{item.name}</S.Name>
              <S.Img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
            </S.Cards>
          ))}
        </S.CardsPosition>
      ) : (
        <Erro_Pesquisa />
      )}

    </S.Home>
  )
}
export default index
