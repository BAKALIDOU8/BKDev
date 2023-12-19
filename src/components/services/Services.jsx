import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="services section" id='services'>
            <h2 className="section-title">Services</h2>
            <span className="section-subtitle">
                Mes propositions de services
            </span>

            <div className="services-container container grid">
                <div className="services-content">
                    <div>
                        <i className="uil uil-web-grid services-icon">
                            <h3 className="services-title">
                                Front <br /> App
                            </h3>
                        </i>
                    </div>

                    <span className="services-button" onClick={() => toggleTab(1)} >Voir Plus  <i className='uil uil-arrow-right services-button-icon'></i>
                    </span>

                    <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>
                            <h3 className="services-modal-title">
                                Front App
                            </h3>
                            <p className="services-modal-description">
                                Avec plus de 4 ans d'expérience, je propose des services de qualité aux clients et aux entreprises.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Créer des maquettes et des prototypes d’interface utilisateur 
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Conception et gestion de sites web, ainsi que leur maintenance.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Réalisation de test unitaire et d’intégration 
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Optimisation pour les moteurs de recherche (SEO) et référencement naturel.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="uil uil-arrow services-icon">
                            <h3 className="services-title">
                                 Back <br /> App
                            </h3>
                        </i>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services-button">Voir Plus  <i className='uil uil-arrow-right services-button-icon'></i>
                    </span>

                    <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>
                            <h3 className="services-modal-title">
                                Back App
                            </h3>
                            <p className="services-modal-description">
                                Avec plus de 4 ans d'expérience, je propose des services de qualité aux clients et aux entreprises.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Installation et Configuration d’API comme Stripe , MapsPlatform.…
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Développement de fonctionnalités : validation par SMS / Mail, système d'authentification...
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Conception et mise en place de bases de données.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Sécurisation de vos données
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="uil uil-edit services-icon">
                            <h3 className="services-title">
                                Other
                            </h3>
                        </i>
                    </div>

                    <span onClick={() => toggleTab(3)}  className="services-button">Voir Plus <i className='uil uil-arrow-right services-button-icon'></i>
                    </span>

                    <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => toggleTab(0)}  className="uil uil-times services-modal-close"></i>
                            <h3 className="services-modal-title"> 
                                Other
                            </h3>
                            <p className="services-modal-description">
                                Avec plus de 4 ans d'expérience, je propose des services de qualité aux clients et aux entreprises.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Respect de la confidentialité des informations.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Respect des délais de livraison
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Assurance qualité tout au long du processus de développement pour garantir des résultats exceptionnels
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Collaboration étroite avec nos clients pour une compréhension approfondie de leurs besoins et attentes.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services