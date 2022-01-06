import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';

import Kontakt from './components/Kontakt';
import Polasci from './components/Polasci';
import Registracija from './components/Registracija';
import Karte from './components/Karte';

//REUSABLE
import Header from './components/reusable/Header';
import Footer from './components/reusable/Footer';
import KarteForm from './components/reusable/KarteForm';

function App() {
    const [karte, setKarte] = useState([]);
    const [_polasci] = useState([
        {
            'id': 0,
            'od': 'Beograd',
            'do': 'Novi Sad',
            'datum': '', //Prazno da ne bi stavljo neke predefinisane datume!
            'mesta': 7
        }, {
            'id': 1,
            'od': 'Beograd',
            'do': 'Subotica',
            'datum': '', //Prazno da ne bi stavljo neke predefinisane datume!
            'mesta': 13
        }, {
            'id': 2,
            'od': 'Beograd',
            'do': 'Nis',
            'datum': '', //Prazno da ne bi stavljo neke predefinisane datume!
            'mesta': 3
        }, {
            'id': 3,
            'od': 'Smederevo',
            'do': 'Nis',
            'datum': '', //Prazno da ne bi stavljo neke predefinisane datume!
            'mesta': 5
        }
    ]);

    function _kupiKartu(_data){
        _polasci.forEach((_obj) => {
            if (_obj.od === _data.od && _obj.do === _data.do){
                if (_obj.mesta > 0){
                    alert('USPESNO STE KUPILI KARTU ZA ' + _data.do + ' SA POLASKOM IZ ' + _data.od);
                    setKarte([...karte, _obj]);
                    _obj.mesta--;
                } else {
                    alert('NEMA MESTA ZA DATI POLAZAK!');
                }
            }
        });
    }

    return (
        <React.StrictMode>
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<>
                            <Header active={0}/>

                            <div className="section">
                                <h1><i>AUTOBUSKA STANICA - DJ</i></h1>
                                <p>TRENUTNI DATUM: {new Date().toDateString()}</p>
                                <img src='https://en.higer.com/uploadfiles/2021/01/20210115090049313.png?NjkzMksucG5n' alt='AUTOBUS'></img>
                            </div>

                            <KarteForm _data={_polasci} onAdd={_kupiKartu}/>
                            <Footer></Footer>
                            
                        </>}/>
                        <Route path="/kontakt" element={< Kontakt />}/>
                        <Route path="/polasci" element={< Polasci _data={_polasci} onAdd={_kupiKartu}/>}/>
                        <Route path='/karte' element={< Karte _data={karte} />}/>
                        <Route path="/registracija" element={< Registracija />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </React.StrictMode>
    )
}

export default App;
