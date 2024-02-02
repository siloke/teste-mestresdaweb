'use client'
import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

const CardContainer = styled.div`
    display: flex;
    margin: 50px;
`

const CardExpand = styled(motion.div)`
    background: linear-gradient(to left, rgb(255, 0, 0), rgba(128, 0, 0));
    position: absolute;
    z-index: -1;
    width: 659px;
    height: 439px;
    border-radius: var(--border-radius);
`

const CardImage = styled.div`
    background-image: url('/heros/wanda-maximoff.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 439px;
    width: 289px;
    border-radius: var(--border-radius);
`
const ImageDescription = styled(motion.div)`
    background: linear-gradient(to right, rgb(255, 0, 0), rgba(128, 0, 0, 30.2%));
    width: 100%;
    height: 50%;
    border-radius: var(--border-radius);
    transform: translateY(100%);
`

// const variants: { open: { opacity: number }, closed: { opacity: number } } = {
//     open: { opacity: 1 },
//     closed: { opacity: 0 },
// }

const Card = (): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <CardContainer onClick={() => setIsExpanded(!isExpanded)}>
            <CardImage>
                {!isExpanded &&
                    <ImageDescription >
                    </ImageDescription>
                }
            </CardImage>
            {
                isExpanded &&
                <CardExpand animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "linear", delay: 0.3 }}>

                </CardExpand>
            }
        </CardContainer >
    );
}

export default Card;