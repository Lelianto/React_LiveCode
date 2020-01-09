import React, { Component } from 'react';
import Header from '../components/header';
import Action from '../components/action';

class GenreAction extends Component {

      render() {
          return (
            <div>
                <Header {...this.props} />
                <Action />
            </div>
            )
            };
      }

export default GenreAction;