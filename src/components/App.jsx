import React from 'react';
import CardList from './cardlist';
import Form from './form';
import '../styles/App.css';

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) =>{
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">
          <h1>{this.props.title}</h1>
        </div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
export default App;
