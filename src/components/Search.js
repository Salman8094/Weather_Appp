import React, { Component } from 'react'
import WeatherItem from './WeatherItem';

export class Search extends Component {
    constructor(){
        super();
        this.state={
            text:"",
            oncl:false,
        }
    }

    handlechange=(event)=>{
        this.setState({text:event.target.value});
    }

    cl1=()=>{
        if(this.state.text!=="")
        {
            this.setState({oncl:true,text:this.state.text})
        }
    }

    cl2=()=>{
        this.setState({oncl:false,text:""})
    }

    // cl3=()=>{
    //     this.setState({oncl:false})
    // }

    render() {

       return (
            <>
            <div className='container ct1'>
                 <form className="d-flex ip my-4">
        <input className="form" id='form' type="search" placeholder="Search By City/Town" value={this.state.text} onChange={this.handlechange} aria-label="Search"/>
        
      </form>
      <button className="btn btns" type="submit" onClick={this.cl1}>Search</button>
      <button className="btn btns my-2 " type="submit" onClick={this.cl2}>Reset</button>
            </div>
            {this.state.oncl?<WeatherItem name={this.state.text}/> :null}
            </>
        )
       
           
    }

}

export default Search
