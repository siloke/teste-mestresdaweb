'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { device } from "../breakpoints";
import styled from "styled-components";
import YellowStar from "./YellowStar";
import CloseIcon from "./CloseIcon";

const CardContainer = styled.div`
    background: linear-gradient(to left, rgb(255, 0, 0), rgba(128, 0, 0));
    display: flex;
    margin: 0 100px;
    width: fit-content;
    border-radius: var(--border-radius);

    @media ${device.tablet} {
        flex-direction: column;
    }
`
const CardExpand = styled(motion.div)`
    width: 333px;
    height: 439px;
    border-radius: var(--border-radius);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const ExpandWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const CardImage = styled.div<{ $imageUrl?: string }>`
    // background-image: url('/heros/wanda-maximoff.jpg');
    background-image: url(${(props) => props.$imageUrl});
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
const ImageDescription = styled(motion.div)`
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
const ExpandTitle = styled.h2`
    font-size: 30px;
`
const ExpandText = styled.p`
    font-size: 18px;
    line-height: 22px;
`
const DetailsText = styled.p`
    font-size: 20px;
    cursor: pointer;
`

const BackgroundExpand = styled.p`
    backdrop-filter: blur(100px);
    border-radius: var(--border-radius); 
    z-index: 1; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

interface PropsCard {
    image?: string
}

const CardTest = ({ image }: PropsCard): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleExpand = (): void => {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <CardContainer>
                <CardImage $imageUrl={image}>
                    {!isExpanded &&
                        <ImageDescription >
                            <ImageTitle>Wanda Maximoff</ImageTitle>
                            <ImageText>Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.</ImageText>
                            <DetailsText onClick={toggleExpand}>ver detalhes</DetailsText>
                        </ImageDescription>
                    }
                </CardImage>
            </CardContainer >
            {isExpanded &&
                <BackgroundExpand onClick={toggleExpand}>
                    <CardContainer>
                        <CardImage $imageUrl={image}>
                            {!isExpanded &&
                                <ImageDescription >
                                    <ImageTitle>Wanda Maximoff</ImageTitle>
                                    <ImageText>Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.</ImageText>
                                    <DetailsText onClick={toggleExpand}>ver detalhes</DetailsText>
                                </ImageDescription>
                            }
                        </CardImage>
                        <CardExpand animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "linear", delay: 0.3 }}>
                            <ExpandWrapper >
                                <ExpandTitle>Wanda Maximoff</ExpandTitle>
                                <ExpandText>
                                    Aparições: <br />
                                    Vingadores - Era de Ultron <br />
                                    Capitão América - Guerra Civil <br />
                                    Vingadores - Guerra Infinita <br />
                                    Vingadores - Ultimato <br />
                                    WandaVision <br />
                                </ExpandText>
                                <ExpandTitle>Avaliações dos Fãs</ExpandTitle>
                                <div>
                                    <YellowStar />
                                    <YellowStar />
                                    <YellowStar />
                                    <YellowStar />
                                    <YellowStar />
                                </div>
                            </ExpandWrapper>
                            <span onClick={toggleExpand}>
                                <CloseIcon />
                            </span>
                        </CardExpand>
                    </CardContainer >
                </BackgroundExpand>
            }
        </>
    );
}

export default CardTest;