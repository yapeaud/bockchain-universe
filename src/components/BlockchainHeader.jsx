/* eslint-disable react/no-unescaped-entities */

import { NavLink } from 'react-router-dom'
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
                                <NavLink to="/">
                                    <img src={logobu} alt="" width={100} />
                                </NavLink>
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
                        {/*<Button label="S'inscrire" defaultClass="btn-warning"/>
                        <Button label="Connecter" defaultClass="btn-dark mb-2"/>*/}
                    </div>
                </div>

                {/* Menu de navigation */}
                <div className="row mb-3">
                    <nav className="col">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <NavLink to="/actualite-crypto" className="nav-link text-dark">
                                    Actualité Crypto
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/nouvelles-blockchain" className="nav-link text-dark">
                                    Nouvelles Blockchain
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/guide-bitcoin" className="nav-link text-dark">
                                    Guide Bitcoin
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/more-infos" className="nav-link text-dark">
                                    Plus d'infos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/academie" className="nav-link text-dark">
                                    Académie
                                </NavLink>
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