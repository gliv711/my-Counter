import React, { Component } from 'react';

class Counter extends Component{
    state = {
        count : 0 
    };
    render(){
        
        return (
        <div>
            <span><h1>{this.formatCount()}</h1></span> 
            <button onClick={this.augm}>+++++</button>
            <button onClick={this.dim}>-----</button>
            </div>
        )
    }

    formatCount(){
        
        return this.state.count === 0 ? 'Zero' : this.state.count; 
    }
    augm = () => {
    
        this.setState({ count : this.state.count + 1 }); 
    }

    dim = () => {
        
            if(this.state.count>0){
            this.setState({ count : this.state.count - 1 }); }
        }
}


export default Counter ;