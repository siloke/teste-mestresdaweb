'use client'
import styled from "styled-components";
import Carousel from "../components/Carousel";
import { FilmesList } from "../data/filmes";
import Navbar from "../components/Navbar";

const Container = styled.div`
  margin: 50px auto;
  max-width: 1920px;
  padding: 0 1rem;
  position: relative;
`

export default function FilmesPage() {

    return (
        <>
            <Navbar />
            <Container>
                <Carousel lista={FilmesList} />
            </Container>
        </>
    );
}
