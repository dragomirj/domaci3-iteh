import React from 'react'
import Header from './reusable/Header'
import Footer from './reusable/Footer';

import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

function Kontakt() {
    return (
        <div className="container">
            <Header active={1}></Header>

            <div className="section">
                <h1>
                    <i>KONTAKT STRANICA</i>
                </h1>
                <p>
                    <AiFillPhone></AiFillPhone>
                    +381 011 123 4567
                </p>
                <p>
                    <MdEmail></MdEmail>
                    autobuskastanica@elab.rs
                </p>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Kontakt