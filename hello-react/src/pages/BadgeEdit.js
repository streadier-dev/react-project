import React from 'react';

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import md5 from 'md5';
import PageLoading from '../components/PageLoading';
class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl: ''
    },
  };

  componentDidMount() { 
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null })
    
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({loading:false, form: data})
    } catch (error) {
      this.setState({ loading: false, error:error })
    }
  }
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    this.state.form.avatarUrl = `https://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`
    this.setState({ loading: true, error: null })

    try {
      await api.badges.update(this.props.match.params.badgeId ,this.state.form)
      this.setState({ loading: false })

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://s.gravatar.com/avatar/8f5fdecfa1e6d6e105b66c62af5a7ee6?s=80"
              />
            </div>

            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error ={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
