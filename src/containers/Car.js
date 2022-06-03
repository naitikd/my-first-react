import React, { Component } from 'react';

class Car extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name : 'Audi',
            modal : 'A23'
        }
    }

    changemodal = () => {
        this.setState ({
            modal : "Q3"
        })
    }
    
    render() {
        return (
            <div>
                <h1>Cars</h1>
               <h2>{this.state.modal}</h2>
               <button onClick={this.changemodal}>Change modal</button> 
            </div>
        );
    }
}

export default Car;