import React from 'react';

class Form extends React.Component{
    state ={
        username:''
    }

    handleOnChange =(event) =>{
        this.setState({username:event.target.value});
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            debugger
            const response = await fetch(`https://api.github.com/users/${this.state.username}`);
            console.log(response.data);
            this.props.addProfile(response.data);
        }catch(error){
            console.log(error.message);
        }
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleOnChange} 
                    type="text" placeholder="Github username"
                    value={this.state.username} />
                <button className="btn btn-primary" >Search</button>
            </form>
        )
    }
}

export default Form;