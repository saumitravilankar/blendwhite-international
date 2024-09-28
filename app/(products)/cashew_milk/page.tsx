import ContactMap from "@/components/contact-map";
import ProductPage from "@/components/product-page"
import YouMayAlsoLike from "@/components/you-may-aslo-like"
import { ProductsToShowOnCashewPage } from "@/constants"

const Page = () => {
    return (
        <>
            <ProductPage index={0} />
            <YouMayAlsoLike productsToShow={ProductsToShowOnCashewPage} />
            <ContactMap />
        </>
    )
}

export default Page;