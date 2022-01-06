import React from 'react'
import Header from './reusable/Header'
import Footer from './reusable/Footer'
import '../assets/css/form.css'

function Registracija() {
    return (
        <div className="container">
            <Header active={4}></Header>

            <div className='section'>
                <div className="form-style-3">
                    <form>
                        <fieldset>
                            <legend>Autobuska stanica - Registracija Korisnika</legend>
                            <label>
                                <span>Username</span>
                                <input className='input-field' type='text'></input>
                            </label>

                            <label>
                                <span>Email</span>
                                <input className='input-field' type='email'></input>
                            </label>

                            <label>
                                <span>Password</span>
                                <input className='input-field' type='password'></input>
                            </label>

                            <label>
                                <input type="Submit" value="Submit"/>
                            </label>
                        </fieldset>
                    </form>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Registracija
