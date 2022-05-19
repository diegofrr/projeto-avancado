import React, { Component } from 'react';
import './caixaDeTexto.css'

class CaixaDeTexto extends Component {

    constructor(props){
        super(props);
        this.state = {
            placeholder: props.placeholder,
            tipo: props.tipo,
            name: props.name,
            id: props.id
        }
    }


    render() {
        return (
            <input 
            type={this.state.tipo} 
            name={this.state.name}
            id={this.state.id}
            placeholder={this.state.placeholder}
            className='default-input'>
            </input>
        );
    }


}

export default CaixaDeTexto;