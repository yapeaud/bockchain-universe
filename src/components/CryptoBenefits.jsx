import { benefits } from "../constants"
import Button from '../components/Button'

const CryptoBenefits = () => {
    return (
        <>
            <div className="container py-4">
                <div className="row">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                            <div className="text-center" style={{ width: "18rem" }}>
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {benefits.map((benefit, idx) => (
                                        <div key={idx} className="mb-2">
                                            <h5 className="card-title">{benefit.title}</h5>
                                            <p className="card-text">{benefit.description}</p>
                                        </div>
                                    ))}
                                        <Button label="En savoir plus" defaultClass="btn-dark" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div></>
    )
}

export default CryptoBenefits