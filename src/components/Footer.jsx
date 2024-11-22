/* eslint-disable react/no-unescaped-entities */


const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <div className="row">
                        {/* Logo et newsletter */}
                        <div className="col-12 col-md-6">
                            {/* Logo */}
                            <h4 className="text-uppercase">Blockchain Universe</h4>
                            {/* Newsletter */}
                            <p>
                                Inscrivez-vous à notre newsletter pour rester informé des nouveautés
                                et des fonctionnalités.
                            </p>
                            <form className="d-flex">
                                <input
                                    type="email"
                                    className="form-control me-2"
                                    placeholder="Votre e-mail"
                                    aria-label="Newsletter"
                                />
                                <button className="btn btn-light" type="submit">
                                    S'abonner
                                </button>
                            </form>
                            <small className="d-block mt-2">
                                En vous abonnant, vous acceptez notre{" "}
                                <a href="#" className="text-white text-decoration-underline">
                                    Politique de Confidentialité
                                </a>{" "}
                                et consentez à recevoir nos messages par e-mail.
                            </small>
                        </div>

                        {/* Liens rapides */}
                        <div className="col-12 col-md-4 col-lg-3 mt-4 mt-md-0">
                            <div className="row">
                                <div className="col">
                                    <h5>Colonne 1</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-white">Lien 1</a></li>
                                        <li><a href="#" className="text-white">Lien 2</a></li>
                                        <li><a href="#" className="text-white">Lien 3</a></li>
                                        <li><a href="#" className="text-white">Lien 4</a></li>
                                        <li><a href="#" className="text-white">Lien 5</a></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h5>Colonne 2</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-white">Lien 6</a></li>
                                        <li><a href="#" className="text-white">Lien 7</a></li>
                                        <li><a href="#" className="text-white">Lien 8</a></li>
                                        <li><a href="#" className="text-white">Lien 9</a></li>
                                        <li><a href="#" className="text-white">Lien 10</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="col-12 col-lg-3 mt-4 mt-lg-0">
                            <h5>Suivez-nous</h5>
                            <ul className="list-unstyled d-flex">
                                <li className="me-3">
                                    <a href="#" className="text-white">
                                        <i className="bi bi-facebook"></i> Facebook
                                    </a>
                                </li>
                                <li className="me-3">
                                    <a href="#" className="text-white">
                                        <i className="bi bi-instagram"></i> Instagram
                                    </a>
                                </li>
                                <li className="me-3">
                                    <a href="#" className="text-white">
                                        <i className="bi bi-linkedin"></i> LinkedIn
                                    </a>
                                </li>
                                <li className="me-3">
                                    <a href="#" className="text-white">
                                        <i className="bi bi-twitter"></i> X
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">
                                        <i className="bi bi-youtube"></i> YouTube
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mentions légales */}
                    <div className="text-center mt-4">
                        <p className="mb-0">
                            © 2024 Blockchain Universe. Tous droits réservés.
                        </p>
                        <div>
                            <a href="#" className="text-white me-3">
                                Politique de Confidentialité
                            </a>
                            <a href="#" className="text-white me-3">
                                Conditions d'Utilisation
                            </a>
                            <a href="#" className="text-white">
                                Paramètres des Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer