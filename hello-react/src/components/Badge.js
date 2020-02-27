import React from 'react';

import confLogo from '../images/badge-header.svg';
import "./styles/Badge.css";

class Badge extends React.Component { 

    render() { 
        const firstName = 'Snoopy';
        const lastName = 'Fooo';
        
        return (
            <div className="Badge" >
                <div className= "Badge__header"> <img src={confLogo} alt="Logo" />
                </div>
                <div className = "Badge__section-name">
                    <img className="Badge__avatar"
            src="https://s.gravatar.com/avatar/8f5fdecfa1e6d6e105b66c62af5a7ee6?s=80"
            alt="Avatar"/>
                    <h1>{this.props.firstName} <br />{this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.gitHub}</div>
                </div>
                <div className="Badge__footer">#github</div>
        </div>
        )
    }

}

export default Badge;