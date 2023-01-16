import React from 'react'
import * as S from "./styled";
import router from 'next/router';

const index = () => {
    return (
        <div>
            <S.Content>
                <S.Text>Hero not found</S.Text>
                <S.Lee src='/lee.png'onClick={() => { router.push("/") }}  />
                <S.Text2>Please click on Stan Lee to search for another Hero</S.Text2>
            </S.Content>
        </div>
    )
}

export default index