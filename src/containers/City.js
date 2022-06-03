import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name : 'surat' 
        }
    }

    changeCityName = () => {
        this.setState ({
            name : 'vadodara'
        })
    }
    
    render() {
        return (
            <div>
                <h1>My city name is : {this.state.name}</h1>
                <button onClick={this.changeCityName}>Change</button>
            </div>
        );
    }
}

export default City;