

const CryptoInterface = () => {
    return (
        <>
            <div className="container my-5">
                {/* Section principale */}
                <div className="row">
                    {/* Texte et image */}
                    <div className="col-12 col-lg-8">
                        <h1 className="mb-3">Découvrez l’avenir des crypto-monnaies aujourd’hui</h1>
                        <p className="text-muted">
                            Plongez dans l’univers fascinant de la blockchain et des crypto-monnaies.
                            Transformez votre compréhension et vos investissements avec nos ressources et
                            analyses approfondies.
                        </p>
                        {/* Image et navigation */}
                        <div className="position-relative">
                            <img
                                src="/src/assets/img/img1.jpeg"
                                alt="Crypto-monnaie"
                                className="img-fluid rounded"
                            />
                            {/* Flèches */}
                            <div className="d-flex justify-content-between position-absolute w-100" style={{ top: "50%" }}>
                                <button className="btn btn-secondary btn-sm">←</button>
                                <button className="btn btn-secondary btn-sm">→</button>
                            </div>
                        </div>
                    </div>

                    {/* Section "Nouvelles histoires" */}
                    <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                        <h2 className="mb-3">Nouvelles histoires</h2>
                        <ul className="list-unstyled">
                            {Array(8)
                                .fill("histoire 1")
                                .map((item, index) => (
                                    <li key={index} className="d-flex align-items-center mb-2">
                                        <span>{item}</span>
                                        <span className="ms-auto">
                                            <i className="bi bi-list"></i>
                                        </span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div></>
    )
}

export default CryptoInterface