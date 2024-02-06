'use client'
import styled from "styled-components";
import { PersonagensList } from "../data/personagens";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";


const Container = styled.div`
  margin: 50px auto;
  max-width: 1920px;
  padding: 0 1rem;
  position: relative;
`
export default function PersonagensPage() {

  return (
    <>
      <Navbar />
      <Container>
        <Carousel lista={PersonagensList} />
      </Container>
    </>
  );
}
