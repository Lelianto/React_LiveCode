import React, { Component } from 'react';
import Header from '../components/header';
import Fiction from '../components/fiction';

class GenreFiction extends Component {

      render() {
          return (
            <div>
                <Header {...this.props} />
                <Fiction />
            </div>
            )
            };
      }

export default GenreFiction