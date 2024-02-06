'use client'
import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import YellowStar from "./YellowStar";
import CloseIcon from "./CloseIcon";
import { device } from "../breakpoints";
import { CardInfo } from "../data/cardinfo";

const CardContainer = styled.div<{ $isExpanded: boolean }>`
    background: ${(props) => props.$isExpanded ? 'linear-gradient(to left, rgb(255, 0, 0), rgba(128, 0, 0))' : 'transparent'};
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: var(--border-radius);

    @media (max-width: ${device.laptop}px) {
        flex-direction: column;
    }
`
const CardImage = styled.div<{ $imageUrl?: string }>`
    background-image: url(${(props) => props.$imageUrl ? props.$imageUrl : '/static/background.jpg'});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: auto;
    height: 400px;
    width: 60%;
    border-radius: var(--border-radius);
    
    @media (max-width: ${device.laptop}px) {
        width: 100%;
    }
    @media (min-width: ${device.laptopL}px) {
        width: 50%;
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
const CardExpand = styled(motion.div)`
    width: 60%;
    padding: 1.2rem;
    height: 400px;
    border-radius: var(--border-radius);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: ${device.laptop}px) {
        width: 100%;
    }
`
const ExpandWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ImageTitle = styled.h2`
    font-size: 1rem;
`
const ImageText = styled.p`
    font-size: 0.8rem;
    text-align: justify;
`
const ExpandTitle = styled.h2`
    font-size: 1.2rem;
`
const ExpandText = styled.p`
    font-size: 0.8rem;
`
const DetailsText = styled.p`
    font-size: 1rem;
    cursor: pointer;
`

interface PropsCard {
    item: CardInfo
}

const Card = ({ item }: PropsCard): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleExpand = (): void => {
        setIsExpanded(!isExpanded);
    }

    return (
        <CardContainer $isExpanded={isExpanded}>
            <CardImage $imageUrl={item.imageUrl}>
                {!isExpanded &&
                    <ImageDescription >
                        <ImageTitle>{item.name}</ImageTitle>
                        <ImageText>{item.description}</ImageText>
                        <DetailsText onClick={toggleExpand}>ver detalhes</DetailsText>
                    </ImageDescription>
                }
            </CardImage>
            {isExpanded &&
                <CardExpand 
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }} 
                transition={{ ease: "linear", delay: 0.3 }}>
                    <ExpandWrapper >
                        <ExpandTitle>{item.name}</ExpandTitle>
                        <ExpandText>{item.description}</ExpandText>
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
            }
        </CardContainer >
    );
}

export default Card;