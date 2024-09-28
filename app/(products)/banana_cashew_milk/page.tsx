import ContactMap from "@/components/contact-map";
import ProductPage from "@/components/product-page"
import YouMayAlsoLike from "@/components/you-may-aslo-like"
import { ProductsToShowOnBananaPage } from "@/constants"

const Page = () => {
    return (
        <>
            <ProductPage index={1} />
            <YouMayAlsoLike productsToShow={ProductsToShowOnBananaPage} />
            <ContactMap />
        </>
    )
}

export default Page;