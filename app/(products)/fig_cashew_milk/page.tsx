import ContactMap from "@/components/contact-map";
import ProductPage from "@/components/product-page"
import YouMayAlsoLike from "@/components/you-may-aslo-like"
import { ProductsToShowOnFigPage } from "@/constants"

const Page = () => {
    return (
        <>
            <ProductPage index={3} />
            <YouMayAlsoLike productsToShow={ProductsToShowOnFigPage} />
            <ContactMap />
        </>
    )
}

export default Page;