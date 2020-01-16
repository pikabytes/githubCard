import React from 'react';
import axios from 'axios';
import './styles/Form.css';


class Form extends React.Component{
    state ={
        username:'',
        error: null
    }

    handleOnChange =(event) =>{
        this.setState({username:event.target.value});
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            await axios.get(`https://api.github.com/users/${this.state.username}`)
            .then( response => {
                this.setState({error:null});
                this.props.addProfile(response.data);

            })
            
        }catch(error){
            this.setState({error: error.message});
        }
        
    }

    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleOnChange} 
                        type="text" placeholder="Github username"
                        value={this.state.username} />
                    <button className="btn btn-primary btn-form" >Search</button>
                </form>
                {this.state.error &&
                        <label className="alert alert-danger">Error: {this.state.error}</label> }
            </React.Fragment>
            
        )
    }
}

export default Form;