import ContactMap from "@/components/contact-map";
import ProductPage from "@/components/product-page"
import YouMayAlsoLike from "@/components/you-may-aslo-like"
import { ProductsToShowOnCoffeePage } from "@/constants"

const Page = () => {
    return (
        <>
            <ProductPage index={2} />
            <YouMayAlsoLike productsToShow={ProductsToShowOnCoffeePage} />
            <ContactMap />
        </>
    )
}

export default Page;