import React, { Component } from 'react';

import './styles/NotFound.css';
import Error404 from '../images/404.svg';

export default class NotFound extends Component {
    render() {
        return (
            <div className="NotFound">
                <div className="container">

                        <div className="Home__col d-none d-md-block col-md-8">
                            <img
                                src={Error404}
                                alt="Astronauts"
                                className="img-fluid p-4"
                            />
                    </div>
                </div>
            </div>
        );
    }
}
