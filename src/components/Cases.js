import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const caseStudies = [
    {
        id: 1,
        subtitle: "Curology",
        title: "A Custom Formula for your skins Unique needs",
        img: 'curology-min',
    },
    {
        id: 2,
        subtitle: "Yourspace",
        title: "Open space floor plans for your next venture",
        img: 'yourspace-min',
    },
    {
        id: 3,
        subtitle: "Lumin",
        title: "For your best look ever",
        img: 'lumin-min',
    }
]

const Cases = () => {
    return (
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled">
                        <FontAwesomeIcon className="arrow" icon={ faArrowLeft } />
                    </div>
                    <div className="cases-arrow next">
                        <FontAwesomeIcon className="arrow" icon={ faArrowRight } />     
                    </div>
                </div>
                <div className="row">
                    { caseStudies.map((caseItem) => (
                        <div className="case" key={caseItem.id}>
                            <div className="case-details">
                                <span>{caseItem.subtitle}</span>
                                <h2>{caseItem.title}</h2>
                            </div>
                            <div className="caseImage">
                                <img src={require(`../assets/${caseItem.img}.png`)} alt={caseItem.subtitle}/>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </section > 
    )
}

export default Cases
