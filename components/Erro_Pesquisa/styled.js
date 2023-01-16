import styled from 'styled-components'

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 700px;
height: 700px;
`
export const Text = styled.h1`
margin: 20px 0;
color: var(--color-titles);
`
export const Lee = styled.img`
cursor: pointer;
width: 300px;
height: 350px;
`
export const Text2 = styled.h1`
text-align: center;
color: var(--color-titles);
margin-top: 20px;
@media (max-width: 360px){
font-size: 14px;
}
`