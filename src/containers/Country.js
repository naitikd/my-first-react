// Class based component

import React, { Component } from 'react';

class Country extends Component {
    // con
    constructor(props) { 
        super(props);
        
        this.state = {
            countryName: 'India'
        }
    }

    changeCountry = () => {
        this.setState({
            countryName: 'US'
        })
    }
    
    render() {
        return (
            <div>
                <p>Cars</p>
                <p>{this.state.countryName}</p>
                <button onClick={() => this.changeCountry()}>Change Country</button>
            </div>
        );
    }
}

export default Country;