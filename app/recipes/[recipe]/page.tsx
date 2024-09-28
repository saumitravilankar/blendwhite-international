"use client";

import { useParams, useRouter } from "next/navigation"

import { RecipeData } from "@/constants"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Container from "@/components/container"

const RecipePage = () => {

    const router = useRouter();
    const params = useParams();

    console.log(router);
    console.log(params.recipe);

    const currentRecipe = RecipeData.find((rec) => rec.id === params.recipe)

    return (
        <div className="pt-32 md:pt-40 pb-10 lg:pb-16">
            <Container>
                <div className="px-6">
                    <AspectRatio ratio={16 / 9}>
                        <iframe width="100%" height="100%" src={currentRecipe?.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </AspectRatio>
                </div>
                <div className="px-6 space-y-3 lg:space-y-4 my-4 lg:my-8 text-textColor ">
                    <h1 className="font-black text-xl sm:text-2xl lg:text-4xl">Ingredients :</h1>
                    <p className="text-sm sm:text-md lg:text-lg leading-5 sm:leading-6 lg:leading-8 text-justify hyphens-auto">{currentRecipe?.info}</p>
                </div>
            </Container>
        </div>
    )
}

export default RecipePage;