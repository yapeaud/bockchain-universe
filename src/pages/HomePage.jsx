import BlockchainIntro from "../components/BlockchainIntro"
import BlockchainHeader from "../components/BlockchainHeader"
import CryptoBenefits from "../components/CryptoBenefits"
import CryptoInterface from "../components/CryptoInterface"
import Footer from "../components/Footer"
import PromoBlockchain from "../components/PromoBlockchain"


const HomePage = () => {
    return (
        <>
            <BlockchainHeader />
            <CryptoInterface />
            <PromoBlockchain />
            <CryptoBenefits />
            <BlockchainIntro />
            <Footer />
        </>
    )
}

export default HomePage