import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Creating Unique Brands is</span>
                        </div>
                        <div className="line">
                            <span>what I do best.</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="/">
                            <span>More about me</span>
                            <FontAwesomeIcon className="arrow" icon={ faArrowAltCircleRight } />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
