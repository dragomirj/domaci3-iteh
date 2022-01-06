import React from 'react'
import Header from './reusable/Header'
import Footer from './reusable/Footer';

function Karte({_data}) {
    return (
        <div className="container">
            <Header active={3}></Header>
            <div className='section'>
                <table class="zui-table">
                    <thead>
                        <tr>
                            <th>OD</th>
                            <th>DO</th>
                            <th>MESTA</th>
                        </tr>
                    </thead>
                    <tbody>
                    {_data.map((d) => (
                        <tr>
                            <td>{d.od}</td>
                            <td>{d.do}</td>
                            <td>1</td>
                        </tr>
                    ))}
                    </tbody>
                </table> 
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Karte
