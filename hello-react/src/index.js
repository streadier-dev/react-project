// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import './global.css';

//const jsx = <h1>Hello, Platzi Badges!</h1>;
//const element = React.createElement('a', {href: 'https://platzi.com'},'ir a el link')
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);

//ReactDOM.render(<Badge firstName="Gabo" lastName="Faure" jobTitle="Frontend Engineer" gitHub="gabo_devops" />, container);