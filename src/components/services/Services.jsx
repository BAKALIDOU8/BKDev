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
                                Product <br /> App
                            </h3>
                        </i>
                    </div>

                    <span className="services-button" onClick={() => toggleTab(1)} >Voir Plus  <i className='uil uil-arrow-right services-button-icon'></i>
                    </span>

                    <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>
                            <h3 className="services-modal-title">
                                Product App
                            </h3>
                            <p className="services-modal-description">
                                Avec plus de 4 ans d'expérience, je propose des services de qualité aux clients et aux entreprises.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Développement d'interface utilisateur responsive
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Intégration et maintenance de sites Web
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Développement Api Rest Axios
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Git
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
                                 Ui/Ux
                            </h3>
                        </i>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services-button">Voir Plus  <i className='uil uil-arrow-right services-button-icon'></i>
                    </span>

                    <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>
                            <h3 className="services-modal-title">
                                Maquette Ui/Ux 
                            </h3>
                            <p className="services-modal-description">
                                Avec plus de 4 ans d'expérience, je propose des services de qualité aux clients et aux entreprises.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Développement d'interface utilisateur responsive
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Intégration et respect des maquettes
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Respect du DesignSystéme
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Maitrise Figma
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
                                Visual Designer
                            </h3>
                            <p className="services-modal-description">
                                Avec plus de 4 ans d'expérience, je propose des services de qualité aux clients et aux entreprises.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Respect de la confidentialité des projets
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Methodes agiles
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Code Review & Refactoring
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Référencement SEO
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