import React, { Component } from 'react';
import './formulario.css'
import Botao from '../Botao';
import CaixaDeTexto from '../CaixaDeTexto';

class Formulario extends Component {

    render() {
        return(
            <form className='formulario'>
            <legend>Cadastro</legend>
            <CaixaDeTexto placeholder='Nome' tipo='text' name='nome' id='nome'/>
            <CaixaDeTexto placeholder='Sobrenome' tipo='texto' name='sobrenome' id='sobrenome'/>
            <CaixaDeTexto placeholder='E-mail' tipo='email' name='email' id='email'/>
            <CaixaDeTexto placeholder='Senha' tipo='password' name='senha' id='senha'/>
            <div className='botoes'>
                <Botao texto='Enviar' tipo='botao-enviar' onClick={() => alert('Dados Enviados!')}/>
                <Botao texto='Cancelar' tipo='botao-cancelar' onClick={() => alert('Envio Cancelado!')}/>
            </div>
            </form>
        )
    }


}

export default Formulario;