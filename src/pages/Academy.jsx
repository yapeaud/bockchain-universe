import BlockchainHeader from "../components/BlockchainHeader"
import Footer from "../components/Footer"


const Academy = () => {
    return (
        <>
            <BlockchainHeader />
            <h1 className="mt-5 pt-5 text-center text-warning">Académie</h1>
            <p className="text-center text-secondary">
            Cette page est actuellement en maintenance. Merci pour votre patience.
            </p>
            <Footer />
        </>
    )
}

export default Academy