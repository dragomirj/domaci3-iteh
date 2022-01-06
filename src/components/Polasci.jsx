import React from 'react'
import Header from './reusable/Header'
import KarteForm from './reusable/KarteForm'

function Polasci({_data, onAdd}) {
    return (
        <div className="container">
            <Header active={2}></Header>
            <KarteForm _data={_data} onAdd={onAdd}></KarteForm>
        </div>
    )
}

export default Polasci
