import * as S from "./styles";
import Head from "../components/Head";
import Pesquisa_Home from "../components/Pesquisa_Home";


export default function Home() {
  return (
    <>
      <S.Home>
        <Head />
        <Pesquisa_Home />
      </S.Home>

    </>
  )
}
