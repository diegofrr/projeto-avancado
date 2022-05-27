import React, { Component } from "react";
import './tarefa.css'

export default class Tarefa extends Component {

    constructor(props){
        super(props);
        this.state = {
            titulo: props.titulo
        }
    }
    
}