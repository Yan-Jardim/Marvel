import styled from 'styled-components'

export const header = styled.div`
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`
export const Title = styled.p`
font-size: 50px;
font-style: oblique;
font-weight: bold;
color: var(--color-blue);
@media (max-width: 360px){
font-size: 40px;
}
`