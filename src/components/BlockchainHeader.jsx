/* eslint-disable react/no-unescaped-entities */

import logobu from '../assets/img/logobu.jpeg'

const BlockchainHeader = () => {
    return (
        <>
            <div className="container-fluid p-3 bg-light">
                {/* En-tête */}
                <div className="row align-items-center mb-3">
                    <div className="col-sm-4 col-md-3 col-lg-2">
                        {/* Logo */}
                        <div className="d-flex align-items-center">
                            <div className="bg-black text-white p-2 rounded">
                                {/*<span className="fw-bold">Blockchain</span>
                                <span className="text-warning">Universe</span>*/}
                                <img src={logobu} alt="" width={100} />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8 col-md-6 col-lg-8 text-center">
                        {/* Barre d'informations */}
                        <div className="bg-black text-light d-flex justify-content-around align-items-center py-2 rounded">
                            {Array(5)
                                .fill("")
                                .map((_, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-warning">BTC</div>
                                        <div className="text-white">$91,141</div>
                                        <div className="text-success">+1.99%</div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-2 text-end mt-3 mt-md-0">
                        {/* Boutons */}
                        <button className="btn btn-outline-dark me-2 mt-2">S'inscrire</button>
                        <button className="btn btn-dark mt-2">Connecter</button>
                    </div>
                </div>

                {/* Menu de navigation */}
                <div className="row mb-3">
                    <nav className="col">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a href="#actualite" className="nav-link text-dark">
                                    Actualité Crypto
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#nouvelles" className="nav-link text-dark">
                                    Nouvelles Blockchain
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#guide" className="nav-link text-dark">
                                    Guide Bitcoin
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#infos" className="nav-link text-dark">
                                    Plus d'infos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#academie" className="nav-link text-dark">
                                    Académie
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Zone principale grise */}
                <div className="row">
                    <div className="col">
                        <div className="bg-secondary p-5 rounded"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlockchainHeader