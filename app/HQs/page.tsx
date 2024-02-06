'use client'
import styled from "styled-components";
import Carousel from "../components/Carousel";
import { HQsList } from "../data/hqs";
import Navbar from "../components/Navbar";

const Container = styled.div`
  margin: 50px auto;
  max-width: 1920px;
  padding: 0 1rem;
  position: relative;
`
export default function HQsPage() {

    return (
        <>
            <Navbar />
            <Container>
                <Carousel lista={HQsList} />
            </Container>
        </>
    );
}
