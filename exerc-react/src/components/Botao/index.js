import React, { Component } from 'react';
import './botao.css'

class Botao extends Component {

    constructor(props){
        super(props);
        this.state = {
            texto: props.texto,
            funcoes: {
                onClick: props.onClick
            }

        }
    }

    render() {
        return(

            <button 
            className={this.props.tipo}
            onClick={this.state.funcoes.onClick}>
                {this.state.texto}
            </button>
            
        );
    }

}

export default Botao;