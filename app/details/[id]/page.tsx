'use client'
import { Personagem } from "@/app/data/personagens";
import { useParams } from "next/navigation";
import { PersonagensList } from "@/app/data/personagens";
import CardTest from "@/app/components/CardTest";

const DetailsPage = () => {

    const params = useParams<{ id: string }>()
    const Personagem = PersonagensList.find((item) => item.id == parseInt(params.id));

    return (
        <>
            {/* <CardTest /> */}
        </>
    );
}

export default DetailsPage;