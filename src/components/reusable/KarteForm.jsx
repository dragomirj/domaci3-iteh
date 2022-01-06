import React from 'react'
import '../../assets/css/form.css'

class Form extends React.Component {
    constructor(props) { //Restartuje na default
        super(props);
        this.state = {
            od: 'Beograd',
            do : 'Novi Sad',
            qq : 0
        };

        this.handleSubmit = this
            .handleSubmit
            .bind(this);

        this.handleChange = this
            .handleChange
            .bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
        this.setState({'qq': 0});
    }

    __findObject(_polaznaStanica, _odredisnaStanica){
        return  this.props._data.find((_data) => {
            return (_data.od=== _polaznaStanica && _data.do === _odredisnaStanica)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const _polaznaStanica = event.target[1].value;
        const _odredisnaStanica = event.target[2].value;
        //const _datumPolaska = event.target[3].value;

        //Pronadji objekat!
        const _r = this.__findObject(_polaznaStanica, _odredisnaStanica);
        if (_r === undefined){
            this.setState({'qq': -1});  //NEMA REZULTATA
        } else {
            this.setState({'qq': 1});   //PRONADJEN
        }
    }

    __dj(_data){
        this.props.onAdd(_data);

        //Smanji broj u tabeli
        this.setState({'qq': 1}); 
    }

    render() {
        let _table;
        if (this.state.qq === 1) {
            //Objekat zbog broja mesta!
            const _data = this.__findObject(this.state.od, this.state.do)
            _table = 
            <table class="zui-table">
                <thead>
                    <tr>
                        <th>OD</th>
                        <th>DO</th>
                        <th>MESTA</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.od}</td>
                        <td>{this.state.do}</td>
                        <td id='brojMesta'>{_data.mesta}</td>
                        <td>
                            <button className="btn" onClick={() => this.__dj(_data)}>KUPI KARTU!</button>
                        </td>
                    </tr>
                </tbody>
            </table>    
        } else {    
            if (this.state.qq === -1) {
                _table = <table><thead><th>Nema rezultata</th></thead></table>;
            }
        }

        return (
            <div className='section'>
                <div className="form-style-3">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Autobuska stanica - Polasci</legend>
                            <label>
                                <span>Polazna stanica
                                    <span className="required">*</span>
                                </span>

                                <select
                                    id='od'
                                    className='input-field'
                                    value={this.state.od}
                                    onChange={this.handleChange}>
                                    <option value='Beograd'>Beograd</option>
                                    <option value='Novi Sad'>Novi Sad</option>
                                    <option value='Subotica'>Subotica</option>
                                    <option value='Smederevo'>Smederevo</option>
                                    <option value='Nis'>Nis</option>
                                </select>
                            </label>

                            <label>
                                <span>Odredisna stanica
                                    <span className="required">*</span>
                                </span>
                                <select
                                    id='do'
                                    className='input-field'
                                    value={this.state.do}
                                    onChange={this.handleChange}>
                                    <option value='Beograd'>Beograd</option>
                                    <option value='Novi Sad'>Novi Sad</option>
                                    <option value='Subotica'>Subotica</option>
                                    <option value='Smederevo'>Smederevo</option>
                                    <option value='Nis'>Nis</option>
                                </select>
                            </label>

                            <label htmlFor="datum">
                                <span>Datum polaska
                                    <span className="required">*</span>
                                </span>
                                <input type="date" className="input-field" name="datum"/>
                            </label>

                            <label>
                                <input type="submit" value="Submit"/>
                            </label>
                        </fieldset>
                    </form>
                </div>

                {_table}
            </div>
        );
    }
}

export default Form
