'use client'
import styled from "styled-components";
import { device } from "../breakpoints";

const CardContainer = styled.div`
    // background: linear-gradient(to left, rgb(255, 0, 0), rgba(128, 0, 0));
    width: 100%;    
    display: flex;
    justify-content: center;

    @media ${device.tablet} {
        flex-direction: column;
    }
`
const CardImage = styled.div`
    background-image: url('/static/wanda-maximoff.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 439px;
    width: 289px;
    border-radius: var(--border-radius);
    @media ${device.tablet} {
        width: 100%;
    }
`
const ImageDescription = styled.div`
    background: linear-gradient(to right, rgb(255, 0, 0), rgba(128, 0, 0, 30.2%));
    width: 100%;
    height: 50%;
    border-radius: var(--border-radius);
    transform: translateY(100%);
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.4rem;
`
const ImageTitle = styled.h2`
    font-size: 20px;
`
const ImageText = styled.p`
    font-size: 12px;
    line-height: 20px;
    text-align: justify;
`
const DetailsText = styled.p`
    font-size: 20px;
    cursor: pointer;
`

interface PropsCard {
    func?: any
}

const ImageCard = ({ }: PropsCard): JSX.Element => {

    return (
        <CardContainer>
            <CardImage>
                <ImageDescription >
                    <ImageTitle>Wanda Maximoff</ImageTitle>
                    <ImageText>Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.</ImageText>
                    <DetailsText>ver detalhes</DetailsText>
                </ImageDescription>
            </CardImage>
        </CardContainer>
    );
}

export default ImageCard;