import React, { Component } from 'react';
import Header from '../components/header';
import Homepage from '../components/home';

class HomeLandingPage extends Component {

      render() {
          return (
            <div>
                <Header {...this.props} />
                <Homepage />
            </div>
            )
            };
      }

export default HomeLandingPage;