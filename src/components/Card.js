import React from 'react'
import './styles/Card.css';

class Card extends React.Component{

    render(){
        return(
            <div className="card github-profile">
                <img className="card-img-top" src={this.props.avatar_url} alt="Avatar"/>
                <div className="card-body imagecard">
                    <div className="card-title">{this.props.name}</div>
                    <div className="card-text">{this.props.login}</div>
                    <div className="card-text">{this.props.hireable === true ? "Hireable" : "Not Hireable"}</div>    
                </div>
            </div>
        )
    }
}


export default Card;