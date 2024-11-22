/* eslint-disable react/no-unescaped-entities */


const BlockchainIntro = () => {
    return (
        <>
            <div className="container my-5">
                {/* Visuel principal */}
                <div className="text-center mb-5">
                    <img
                        src={"/src/assets/img/img2.jpeg"}
                        alt="Pièce de monnaie virtuelle enflammée"
                        className="img-fluid"
                        style={{ maxWidth: "300px" }}
                    />
                    <h1 className="mt-3">Introduction à la Blockchain</h1>
                    <p className="text-muted">
                        Découvrez la puissance et la rapidité de cette technologie révolutionnaire.
                    </p>
                </div>

                {/* Sections principales */}
                <div className="row">
                    {/* Section 1 */}
                    <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Les principes de base</h5>
                                <p className="card-text">
                                    "La blockchain utilise des blocs pour stocker des informations de manière
                                    transparente et immuable."
                                </p>
                                <span className="text-primary">&#9650;</span> {/* Icône triangle */}
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Sécurité renforcée</h5>
                                <p className="card-text">
                                    "Les transactions sont cryptées, rendant leur falsification presque
                                    impossible."
                                </p>
                                <span className="text-primary">&#9650;</span>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Fonctionnement décentralisé</h5>
                                <p className="card-text">
                                    "Chaque participant du réseau a accès aux mêmes informations, garantissant
                                    ainsi la confiance."
                                </p>
                                <span className="text-primary">&#9650;</span>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Applications variées</h5>
                                <p className="card-text">
                                    "La blockchain est utilisée dans de nombreux secteurs, de la finance à la
                                    logistique."
                                </p>
                                <span className="text-primary">&#9650;</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Appel à l'action */}
                <div className="text-center mt-5">
                    <button className="btn btn-primary me-3">S'inscrire</button>
                    <button className="btn btn-outline-primary">En savoir plus</button>
                </div>
            </div>
        </>
    )
}

export default BlockchainIntro