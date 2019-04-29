import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
  state = { language: 'english'};

  // arrow function bc this is a callback method
  // that we are passing off to something else in our app
  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className ="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        // {this.state.language}
        <LanguageContext.Provider value = {this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
