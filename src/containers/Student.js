import React, { Component } from 'react';


class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id :10,
            name:"Naitik",
            country:"India"
        }
    } 

    changename = () => {
        this.setState ({
            name : 'Dharasandiya'
        })
    }
    
    render() {
        return (
            <div>
                <h1>Student</h1>
              <h1>My name is : {this.state.name}</h1>
              <h1>Roll.No : {this.props.data.RollNo}</h1>
              <button onClick={this.changename}>Change</button>  
            </div>
        );
    }
}

export default Student;