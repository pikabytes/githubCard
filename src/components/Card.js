import React from 'react'
import './styles/Card.css';

class Card extends React.Component{

    render(){
        return(
            <div className="github-profile">
                <img src={this.props.avatar_url} alt="Avatar"/>
                <div className="info">
                    <div className="name">{this.props.name} alexis</div>
                    <div>{this.props.login} pikabytes</div>
                    <div>{this.props.hireable} true</div>    
                </div>
            </div>
        )
    }
}


export default Card;