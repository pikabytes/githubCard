import React from 'react';
import ListCard from './ListCard';
import Form from './Form';
import './styles/App.css';

class App extends React.Component{
    state={
        profiles:[],
    }

    addNewProfile =(profile)=>{
        this.setState({
            profiles: [...this.state.profiles, profile]
        });
    }

    render(){
        return(
            <React.Fragment>
                <div className="header">Github Profile Cards</div>
                <Form addProfile={this.addNewProfile}/>
                <ListCard profiles={this.state.profiles}/>
            </React.Fragment>
            
        )
    }
}


export default App;