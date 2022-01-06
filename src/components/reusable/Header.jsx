import React from 'react'
import {Link} from "react-router-dom"

function Header({active}) {
    const _stranice = [
        {
            id: 0,
            to: '/',
            name: 'Pocetna'
        }, {
            id: 1,
            to: '/kontakt',
            name: 'Kontakt'
        }, {
            id: 2,
            to: '/polasci',
            name: 'Polasci'
        }, {
            id: 3,
            to: '/karte',
            name: 'Karte'
        }, {
            id: 4,
            to: '/registracija',
            name: 'Registracija'
        }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">AUTOBUSKA STANICA</a>
            <button
                id='navbar-toggler'
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor02"
                aria-controls="navbarColor02"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    {_stranice.map(p => {
                        if(p.id === active)
                            return <li key = {p.id} className="nav-item active"><Link className="nav-link" to={p.to}>{p.name}</Link></li>
                        
                        return <li key = {p.id} className="nav-item"><Link className="nav-link" to={p.to}>{p.name}</Link></li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Header