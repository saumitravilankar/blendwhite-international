"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FaqAccordian = () => {
    return (

        <div className="w-full pt-2 pb-10">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-md md:text-2xl text-start font-black capitalize hover:no-underline">What are the benefits of switching to plant-based milk?</AccordionTrigger>
                    <AccordionContent className="text-sm md:text-lg text-justify hyphens-auto leading-6">
                        Plant based milk are dairy-free alternatives rich in essential nutrients, making them ideal for vegans and those with lactose intolerance. They promote heart health, bone strength, and offer various flavours to suit different tastes.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-md md:text-2xl text-start font-black capitalize hover:no-underline"> How do I use cashew milk and almond milk in my daily cooking and baking?</AccordionTrigger>
                    <AccordionContent className="text-sm md:text-lg text-justify hyphens-auto leading-6">
                        Cashew and almond milk can replace dairy milk in almost any recipe. Use them in coffee, cereal, smoothies, and as a milk substitute in cooking and baking. They add a creamy texture and subtle nutty flavour to your dishes.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-md md:text-2xl text-start font-black capitalize hover:no-underline">What are the available flavours of plant-based milk?</AccordionTrigger>
                    <AccordionContent className="text-sm md:text-lg text-justify hyphens-auto leading-6">
                        Plant-based milk comes in various flavours, including vanilla, chocolate, strawberry, and more. These flavours provide versatility for your recipes and cater to different taste preferences.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-md md:text-2xl text-start font-black capitalize hover:no-underline">How are vegan milk products made?</AccordionTrigger>
                    <AccordionContent className="text-sm md:text-lg text-justify hyphens-auto leading-6">
                        Vegan milk products, such as cashew milk and almond milk, are typically made by blending nuts with water and straining the mixture. Additional flavourings or sweeteners can be added for taste.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-md md:text-2xl text-start font-black capitalize hover:no-underline">Are there any allergens in plant-based milk?</AccordionTrigger>
                    <AccordionContent className="text-sm md:text-lg text-justify hyphens-auto leading-6">
                        Cashew and almond milk can be allergenic for individuals with nut allergies. Always check product labels for allergen information.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default FaqAccordian;