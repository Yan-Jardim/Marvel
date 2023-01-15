import styled from 'styled-components'

export const Header = styled.div`
display: flex;
justify-content: center;
@media (max-width: 1200px){
display: flex;
flex-direction: column;
align-items: center;
}
`
export const Img = styled.img`
width: 250px;
height: 250px;
@media (max-width: 1200px){
display: flex;
margin-bottom: 10px;
}
`
export const Description = styled.div`
background-color: var(--color-black);
color: var(--color-white);
text-align: center;
width: 1000px;
height: 250px;
@media (max-width: 1200px){
width: 100%;
height: 300px;
}
`
export const Title = styled.h1`
margin: 10px 0px;
`
export const Parag = styled.p`
margin: 0px 20px;
`
export const Main = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
`
export const Cards = styled.div`
display: flex;
text-align: center;
@media (max-width: 1200px){
display: flex;
flex-direction: column;
}
`
export const Dados = styled.p`
width: 300px;
margin: 10px 0 0 0 ;
border-bottom: 2px solid #ccc;
`
export const Comics = styled.div`
background-color: var(--color-white);
margin: 0 10px;
border-radius: 10px;
color: var(--color-titles);
`
export const Eventos = styled.div`
background-color: var(--color-white);
margin: 0 10px;
border-radius: 10px;
color: var(--color-titles);
@media (max-width: 1200px){
    margin: 10px;
}
`
export const Series = styled.div`
background-color: var(--color-white);
margin: 0 10px;
border-radius: 10px;
color: var(--color-titles);
@media (max-width: 1200px){
    margin: 10px;
}
`
export const Historia = styled.div`
background-color: var(--color-white);
margin: 0 10px;
border-radius: 10px;
color: var(--color-titles);
@media (max-width: 1200px){
    margin: 10px;
}
`