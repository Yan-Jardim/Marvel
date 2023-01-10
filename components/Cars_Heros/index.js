import * as S from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Cards = () => {

  const [resposta, setResposta] = useState([]);

  const router = useRouter();
  const { herois } = router.query;

  useEffect(() => {
    axios
      .get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${herois}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`)
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
            <S.Name>{item.name}</S.Name>
            <S.Img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
          </S.Cards>
        ))}
      </S.CardsPosition>
    </S.Home>
  )
}

export default Cards