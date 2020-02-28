import React from 'react';

import '../components/styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
                            <Badge firstName="Gabriel" lastName="Faure" twitter="gabo_devops" jobTittle="FrontEnd Engineer"  avatarUrl="https://s.gravatar.com/avatar/8f5fdecfa1e6d6e105b66c62af5a7ee6?s=80"   />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
